import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import MenuPage from "../pages/MenuPage";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
