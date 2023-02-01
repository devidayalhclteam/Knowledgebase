import React from "react";

const Home = React.lazy(() => import("./pages/Home/Home"));

interface Route {
  index?: boolean;
  path?: string;
  element: React.ReactNode;
}

const AppRoutes: Route[] = [
  {
    index: true,
    path: "/",
    element: <Home />
  },
  {
    path: "/aboutUs",
    element: ""
  },
  {
    path: "/forum",
    element: ""
  },
  {
    path: "/blogs",
    element: ""
  },

];

export default AppRoutes;
