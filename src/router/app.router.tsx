import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { AdminLayout } from "@/admin/layots/AdminLayout";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
// import { SearchPage } from "@/heroes/pages/search/SearchPage";

// carga perezosa recomendacion hacer el lazy con las pantallas que no son comunmente visitadas
const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));

// appRouter va a ser nuestro sistema de rutas principal

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/heroes/:idSlug",
        element: <HeroPage />,
      },
      {
        path: "/Search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
