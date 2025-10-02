import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import Search from "../pages/Search/Search";
import NotFound from "../pages/NotFound/NotFound";

const routes: RouteObject[] = [
  { path: "/", element: <Navigate to="/weatherapp" replace /> },
  { path: "/weatherapp", element: <HomePage /> },
  { path: "/weatherapp/search", element: <Search /> },
  { path: "/weatherapp/404", element: <NotFound /> },
  { path: "/*", element: <Navigate to="/weatherapp/404" replace /> },
];

export default routes;
