import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";

import App from "./App";

import Acceuil from "./pages/Accueil";
import Sejour from "./pages/Sejour";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import Categorie from "./pages/Categorie";
import Personnage from "./pages/Personnages";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Acceuil />,
      },
      {
        path: "/sejour",
        element: <Sejour />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/categorie/:categoryName",
        element: <Categorie />,
      },
      {
        path: "/categorie/:categoryName/:persoName",
        element: <Personnage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Routes />
    </RouterProvider>
  </React.StrictMode>
);
