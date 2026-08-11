import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Routing error page</div>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "*", element: <div>NotFoundPage</div> },
    ],
  },
]);
