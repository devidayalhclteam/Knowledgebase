import React from "react";

const Home = React.lazy(() => import("./pages/Home/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"));
const Forum = React.lazy(() => import("./pages/Forum/Forum"));
const Blogs = React.lazy(() => import("./pages/Blogs/Blogs"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));

interface RouteItem {
  index?: boolean;
  path: string;
  element: React.ReactNode;
}

const AppRoutes: RouteItem[] = [
  {
    index: true,
    path: "/",
    element: <Home />
  },
  {
    path: "/aboutUs",
    element: <AboutUs />
  },
  {
    path: "/forum",
    element: <Forum />
  },
  {
    path: "/blogs",
    element: <Blogs />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
];

export default AppRoutes;
