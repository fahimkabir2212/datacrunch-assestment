import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../components/sections/footer/Footer";

export default function RootLayout() {
  return (
    <>
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
