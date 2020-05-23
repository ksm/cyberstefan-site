import React from "react";
import { Navbar as RSNavbar, NavbarBrand, Badge } from "reactstrap";

export const Navbar = () => {
  return (
    <RSNavbar color="light">
      <NavbarBrand>
        CyberStefan Stream Dashboard{" "}
        <Badge
          href="https://github.com/ksm/cyberstefan-site/blob/master/CHANGELOG.md"
          color="primary"
        >
          v0.2.0
        </Badge>
      </NavbarBrand>
    </RSNavbar>
  );
};
