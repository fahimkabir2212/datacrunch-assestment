import { Outlet, ScrollRestoration } from "react-router";
import SiteHeader from "../components/layout/header/SiteHeader";
import Footer from "../components/layout/footer/Footer";

export default function RootLayout() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
