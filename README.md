# MetaTech — Figma to Responsive Web Application

A responsive marketing site built from the provided Figma design, with all page
content served from a REST API rather than hardcoded in the components.

- **Live preview** — https://datacrunch.fahimkabir.dev/
- **Frontend** — React 19 + TypeScript + Vite + Tailwind CSS v4
- **Backend** — Node.js + Express 5 + TypeScript, serving static JSON content

---

## Getting started

### Prerequisites

- Node.js 20 or newer (developed on 24.x)
- npm 10 or newer

### 1. Install

From the repository root — this installs the root, frontend, and backend
workspaces in one step:

```bash
npm run install:all
```

### 2. Configure environment

Both packages ship an `.env.example`. Copy each one:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

| Variable             | Package  | Default                 | Purpose                                        |
| -------------------- | -------- | ----------------------- | ---------------------------------------------- |
| `PORT`               | backend  | `5000`                  | Port the API listens on                        |
| `NODE_ENV`           | backend  | `development`           | Enables production caching and error redaction |
| `CORS_ORIGINS`       | backend  | `http://localhost:5173` | Comma-separated list of allowed origins        |
| `VITE_API_BASE_URL`  | frontend | `http://localhost:5000` | API origin; leave unset to call the same origin |

### 3. Run

```bash
npm run dev
```

This starts both servers concurrently:

- Frontend — http://localhost:5173
- API — http://localhost:5000

#### Running one side on its own

```bash
npm run dev:frontend    # Vite only
npm run dev:backend     # API only
```

Either can also be run from inside its own package with `npm run dev`.

The frontend expects the API to be reachable at `VITE_API_BASE_URL`. Started on
its own with no API running, the page still renders — every section falls back
to its error state with a retry button, which is the intended behaviour rather
than a broken build.

### 4. Build

```bash
npm run build
```

Compiles the backend to `backend/dist` and the frontend to `frontend/dist`.

```bash
npm start --prefix backend        # serve the compiled API
npm run preview --prefix frontend # serve the built frontend locally
```

`preview` serves the production bundle rather than the dev server, so it is the
one to use for Lighthouse runs or for checking the built output.

### Scripts

| Script            | Where             | Purpose                                  |
| ----------------- | ----------------- | ---------------------------------------- |
| `install:all`     | root              | Install all three package trees          |
| `dev`             | root              | Run frontend and API together            |
| `dev:frontend`    | root              | Vite dev server only                     |
| `dev:backend`     | root              | API in watch mode only                   |
| `build`           | root              | Build backend then frontend              |
| `start`           | backend           | Run the compiled API from `dist`         |
| `preview`         | frontend          | Serve the production build               |
| `lint`            | frontend          | ESLint over the package                  |

---

## Deployment (Vercel)

Frontend and API deploy as a **single Vercel project**, so both share one
origin. That means no CORS configuration and one URL.

`vercel.json` declares the two halves as services and routes between them:

- `services.frontend` — root `frontend`, built with the Vite preset
- `services.backend` — root `backend`, using `src/index.ts` as the service
  entrypoint; the port comes from `process.env.PORT`, which `config/env.ts`
  already reads
- `rewrites` — `/api/*` goes to the backend service, everything else to the
  frontend

Neither package needed code changes to deploy: the backend runs exactly as it
does locally, and the frontend calls the API on the same origin.

### Environment variables

**Leave `VITE_API_BASE_URL` unset.** The client falls back to the same origin,
which is what you want here. Setting it to a full URL would send the browser
cross-origin and reintroduce CORS.

`CORS_ORIGINS` is likewise unnecessary while both halves share an origin.
Vercel sets `NODE_ENV=production` itself, which switches content responses to
the cached `Cache-Control` header.

### After deploying

1. `/api/health` should return `{"success":true,…}` — confirms the backend
   service is up and the `/api` rewrite reaches it.
2. The home page should render content rather than section error states —
   confirms the frontend is reaching the API on the same origin.
3. Load a URL that does not exist, e.g. `/does-not-exist`, and refresh it. It
   should show the styled 404 page. Vercel's own 404 instead means the frontend
   service is not falling back to `index.html`, and the SPA needs an explicit
   rewrite to `/index.html` for unmatched paths.

---

## API

All responses share one envelope, so the client never has to guess the shape of
a failure:

```jsonc
// success
{ "success": true, "status": 200, "data": { /* … */ }, "error": null }

// failure
{ "success": false, "status": 404, "data": null,
  "error": { "code": "SECTION_NOT_FOUND", "message": "…" } }
```

| Method | Endpoint             | Description                            |
| ------ | -------------------- | -------------------------------------- |
| GET    | `/api/health`        | Liveness check and process uptime      |
| GET    | `/api/home/:section` | One section of the home page           |
| GET    | `/api/site/:section` | Shared chrome (header, footer)         |

**Home sections** — `hero`, `trusted-by`, `about`, `solutions`,
`pillar-detail`, `product-showcase`, `tech-stack`

**Site sections** — `header`, `footer`

An unknown slug returns `404` with code `SECTION_NOT_FOUND` and a message
listing the valid ones. Content responses are cached for five minutes with
`stale-while-revalidate` in production, and `no-store` in development.

---

## Project structure

```
backend/src
├── config/          environment parsing
├── constants/       route slug ↔ content key maps
├── controllers/     request handling
├── data/            static JSON content (home, site)
├── errors/          HttpError
├── middleware/      404 + centralised error handler
├── routes/          route table
├── services/        content lookup
├── types/           API envelope + content model
└── utils/           response helpers

frontend/src
├── api/             fetch client (timeouts, retries, typed envelope)
├── components/
│   ├── layout/      site chrome — header (with mega menu), footer
│   ├── sections/    page sections, one folder per section
│   ├── feedback/    error states
│   └── ui/          shared primitives (Container, VideoModal, …)
├── constants/       section slugs
├── hooks/           useSection / useSiteSection
├── layouts/         RootLayout
├── pages/           HomePage, NotFoundPage, RouteErrorPage
├── routes/          router definition
├── styles/          Tailwind theme tokens, fonts, globals
└── types/           content model (mirrors the backend)
```

The split between `components/layout` and `components/sections` mirrors the API:
`layout/` is chrome fed by `/api/site/*` and rendered on every route,
`sections/` are blocks of a page fed by `/api/home/*`.

---

## Architecture notes

**Content is data, not markup.** Every string, image path, and link comes from
the API. Adding a logo to the "trusted by" grid or changing a nav label is a
backend data change with no component edits.

**Sections fetch independently.** Each section calls its own endpoint through
`useSection`, so one failing request degrades a single block instead of the
page. Every section has a skeleton shaped like its real layout, and an error
state with a retry button.

**Typed slugs.** The backend maps route slugs to content keys through a
`satisfies Record<SectionSlug, SectionKey>` table, so adding a section without
wiring its slug is a compile error rather than a 404 found at runtime.

**Design tokens.** Figma variables live once in `styles/tokens.css` as Tailwind
v4 `@theme` tokens (`--color-brand`, `--color-canvas`, …). Components reference
semantic names, not raw hex values.

**Accessibility and motion.** The mega menu opens on hover, focus, and click, so
it works for pointer, keyboard, and touch; Escape closes it and restores focus
to its trigger. The video modal is a native `<dialog>`, which brings focus
trapping, Escape handling, and top-layer stacking from the platform. Marquees
and animations are gated behind `motion-safe` / `motion-reduce`.

**Cross-browser compatibility.** The page was built against Chrome but
verified on real iOS Safari, which surfaced two engine-specific issues fixed
during development rather than just Chrome-checked and shipped:

- `PlayButton`'s solid core was an SVG `<circle>` positioned with `inset-*`
  alone. An `<svg>` with no explicit `width`/`height` is a replaced element
  with an intrinsic ratio (300×150 by default); sizing it purely via `inset`
  on all four sides is an over-constrained case that Chrome resolves by
  stretching to fill, but Safari resolved by keeping the intrinsic ratio
  instead — rendering the core small and off-center from the two ring
  `<span>`s around it. Fixed by making the core a plain `<span>` (not a
  replaced element, no ambiguity) and giving the remaining icon-only `<svg>`
  explicit `width="100%" height="100%"` so it can't fall back to that ratio
  either.
- `PillarCard`'s title/description reveal relied entirely on
  `:hover`/`group-hover`, which has no touch equivalent — and on iOS Safari a
  tap can leave `:hover` applied ("sticky hover") until something else is
  tapped, rather than just doing nothing. Scoped the hover-only interaction to
  `md:` and up, where a pointer is the norm, and made the revealed layout
  (title, description, background) the default below that, so the content
  isn't gated behind an interaction some devices can't perform.

---

## Assumptions made

- **Static JSON is the content source.** The brief allows it, so there is no
  database or CMS. The data layer is isolated behind a service, so swapping in a
  real source would not touch the controllers or the client.
- **Per-section endpoints over a single page payload.** Modelled on how a real
  CMS-backed site would grow, where sections are independently authored and may
  come from different services. The trade-off is more round trips than this
  amount of static content strictly needs.
- **The footer and header are site chrome, not home-page content**, so they live
  under `/api/site/*` — a 404 page should not have to request "home" content in
  order to draw its own footer.
- **The 404 page renders without chrome**, on the assumption that a dead URL has
  no page furniture to wrap. It keeps a "back to home" link as the way out.
- **CTA buttons are presentational.** The design supplies no destinations for
  "Book for Demo" and similar, so they render as real buttons without handlers.
- **Nav links point at on-page anchors**, since no other routes exist yet.

## Future improvements

- **Share the content types between packages.** The frontend currently mirrors
  the backend's content model by hand. Defining the schemas once with Zod would
  give both packages their types via `z.infer`, plus runtime validation of the
  content, from a single source of truth.
- **Lift shared content into a Context provider.** Header and footer content is
  fetched per route mount; a provider holding it would remove the duplicate
  requests and give the app a single place to cache server state.
- **Server-driven page composition.** Returning an ordered array of typed
  section blocks from `/api/home` would let the backend decide which sections
  appear and in what order, making the page arrangement editable content — the
  groundwork for an admin UI.
- **A schema-driven admin panel.** With Zod schemas in place, an editor UI can
  be generated from the schema rather than hand-built per section type.
- **SSR or static prerendering.** As a client-rendered SPA, section content only
  exists after JavaScript boots and the fetch resolves. The static shell carries
  the title, description, and font preloads, but a crawler that does not execute
  JavaScript sees an empty root. Prerendering from the same content API would
  fix it.
- **Tests.** React Testing Library around the mega menu's open/close behaviour
  and the API client's retry and timeout paths would cover the parts most likely
  to regress.
