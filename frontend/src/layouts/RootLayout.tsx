import { Outlet, ScrollRestoration } from "react-router";

export default function RootLayout() {
  return (
    <>
      <main id="main">
        <Outlet />
      </main>

      <ScrollRestoration />
    </>
  );
}
