import { useCallback, useEffect, useRef, useState } from "react";
import Container from "../../ui/Container";
import Button from "../../ui/buttons/Button";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";
import HeaderSkeleton from "./HeaderSkeleton";
import { useSiteSection } from "../../../hooks/useSection";
import { SITE_SLUGS } from "../../../constants/sections";
import type { HeaderContent, NavItem } from "../../../types/content";

const CLOSE_DELAY_MS = 150;

export default function SiteHeader() {
  const { status, data } = useSiteSection<HeaderContent>(SITE_SLUGS.header);

  const [openId, setOpenId] = useState<string | null>(null);
  const [menuItem, setMenuItem] = useState<NavItem | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const triggers = useRef<Record<string, HTMLButtonElement | null>>({});

  const cancelClose = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const closeNow = useCallback(() => {
    cancelClose();
    setOpenId(null);
  }, [cancelClose]);

  const closeSoon = useCallback(() => {
    cancelClose();
    closeTimer.current = window.setTimeout(
      () => setOpenId(null),
      CLOSE_DELAY_MS,
    );
  }, [cancelClose]);

  const openMenu = useCallback(
    (item: NavItem) => {
      cancelClose();
      setOpenId(item.id);
      setMenuItem(item);
    },
    [cancelClose],
  );

  useEffect(() => cancelClose, [cancelClose]);

  useEffect(() => {
    if (!openId) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      triggers.current[openId]?.focus();
      closeNow();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openId, closeNow]);

  if (status === "loading") return <HeaderSkeleton />;

  const header: HeaderContent | null = status === "success" ? data : null;

  const isMenuOpen = openId !== null && menuItem !== null;

  return (
    <header className="relative z-50 pt-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:z-10 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:font-bold focus:text-on-brand"
      >
        Skip to content
      </a>

      <Container>
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={closeSoon}
          className="relative"
        >
          {/* border rather than ring: a ring draws on all four sides, so the
              bar's bottom edge and the panel's top edge would stack into a
              seam. With borders the shared edge can simply be dropped. */}
          <div
            className={`border border-ink-inverse/10 bg-ink-inverse/10 backdrop-blur-sm ${
              isMenuOpen ? "rounded-t-2xl border-b-0" : "rounded-2xl"
            }`}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
              <a href="/" aria-label="MetaTech home" className="shrink-0">
                <img
                  src={header?.logo.src ?? "/logo.svg"}
                  alt={header?.logo.alt ?? "MetaTech"}
                  width={155}
                  height={25}
                  className="h-6 w-auto"
                />
              </a>

              {header && (
                <>
                  <nav
                    aria-label="Main"
                    className="hidden items-center gap-8 md:flex"
                  >
                    {header.items.map((item) => {
                      const isOpen = openId === item.id;

                      if (!item.menu) {
                        return (
                          <a
                            key={item.id}
                            href={item.href}
                            onMouseEnter={closeNow}
                            onFocus={closeNow}
                            className="text-sm font-semibold text-ink-inverse transition-colors hover:text-brand"
                          >
                            {item.label}
                          </a>
                        );
                      }

                      return (
                        <button
                          key={item.id}
                          type="button"
                          ref={(node) => {
                            triggers.current[item.id] = node;
                          }}
                          aria-expanded={isOpen}
                          aria-controls={`mega-menu-${item.id}`}
                          onMouseEnter={() => openMenu(item)}
                          onFocus={() => openMenu(item)}
                          onClick={() => (isOpen ? closeNow() : openMenu(item))}
                          className={`cursor-pointer text-sm font-semibold transition-colors ${
                            isOpen
                              ? "text-brand"
                              : "text-ink-inverse hover:text-brand"
                          }`}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </nav>

                  {/* Wrapper owns the responsive display so it cannot collide
                      with the button's own `inline-flex`. */}
                  <div className="hidden md:block">
                    <Button
                      as="anchor"
                      href={header.cta.href}
                      variant="inverse"
                      className="text-sm"
                    >
                      {header.cta.label}
                    </Button>
                  </div>

                  <button
                    type="button"
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-nav"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMobileOpen((open) => !open)}
                    className="cursor-pointer rounded-lg p-2 text-ink-inverse md:hidden"
                  >
                    <span
                      aria-hidden="true"
                      className="block text-xl leading-none"
                    >
                      {mobileOpen ? "✕" : "☰"}
                    </span>
                  </button>
                </>
              )}
            </div>

            {header && mobileOpen && (
              <div id="mobile-nav">
                <MobileNav
                  header={header}
                  onNavigate={() => setMobileOpen(false)}
                />
              </div>
            )}
          </div>

          {/* Always mounted so both directions animate. `visibility` is in the
              transition so it flips only after the fade finishes, which also
              keeps the closed panel out of the tab order and a11y tree. */}
          {menuItem?.menu && (
            <div
              className={`absolute inset-x-0 top-full rounded-b-2xl border border-t-0 border-ink-inverse/10 bg-ink-inverse/10 backdrop-blur-sm transition-all duration-200 ease-out motion-reduce:transition-none ${
                isMenuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <MegaMenu
                id={`mega-menu-${menuItem.id}`}
                items={menuItem.menu}
                onNavigate={closeNow}
              />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
