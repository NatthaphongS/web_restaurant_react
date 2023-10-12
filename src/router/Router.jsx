import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import MenuPage from "../pages/MenuPage";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";
import ManageOrderPage from "../adminpages/manage-orders/ManageOrdersPage";
import ManageMenuPage from "../adminpages/manage-menus/ManageMenusPage";
import SummaryPage from "../adminpages/summary/SummaryPage";
import RedirectIfAdmin from "./RedirectIfAdmin";
import RedirectIfNotAdmin from "./RedirectIfNotAdmin";
import MenuContextProvider from "../contexts/MenuContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectIfAdmin>
        <Layout />
      </RedirectIfAdmin>
    ),
    children: [
      { path: "", element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    path: "/admin/",
    element: (
      <RedirectIfNotAdmin>
        <Layout />
      </RedirectIfNotAdmin>
    ),
    children: [
      { path: "", element: <SummaryPage /> },
      { path: "orders", element: <ManageOrderPage /> },
      {
        path: "menus",
        element: (
          <MenuContextProvider>
            <ManageMenuPage />
          </MenuContextProvider>
        ),
      },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
