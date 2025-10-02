import type { RouteObject } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import Search from "../pages/Search/Search";

    const routes: RouteObject[] = [
        {path: '/weatherapp', element: <HomePage />},
        {path: '/weatherapp/search', element: <Search />},
    ]

export default routes;
