import React from "react";

interface Navbar {
  path: string;
  name: string;
}

const NavbarList: Navbar[] = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/aboutUs",
    name: "About Us"
  },
  {
    path: "/forum",
    name: "Forum"
  },
  {
    path: "/blogs",
    name: "Blogs"
  },
  {
    path: "/dashboard",
    name: "Dashboard"
  }
];

export default NavbarList;
