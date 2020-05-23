import React from "react";
import { Navbar as RSNavbar, NavbarBrand, Badge } from "reactstrap";

export const Navbar = () => {
  return (
    <RSNavbar color="light">
      <NavbarBrand>
        CyberStefan Stream Dashboard <Badge color="primary">v0.1.0</Badge>
      </NavbarBrand>
    </RSNavbar>
  );
};
