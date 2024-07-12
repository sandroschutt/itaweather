import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import HomeView from "../views/Home";
import City from "../views/City";
import Clients from "../views/Clients";
import Companies from "../views/Companies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/city/:name",
    element: <City />,
  },
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "/companies",
    element: <Companies />,
  }
]);