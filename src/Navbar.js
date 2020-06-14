import React from "react";
import { Navbar as RSNavbar, NavbarBrand, Badge } from "reactstrap";
import { version } from "../package.json";

export const Navbar = () => {
  return (
    <RSNavbar color="light">
      <NavbarBrand>
        🎙 CyberStefan Stream Dashboard{" "}
        <Badge
          href="https://github.com/cyberstefantv/cyberstefan-site/blob/master/CHANGELOG.md"
          color="primary"
        >
          v{version}{" "}
        </Badge>
      </NavbarBrand>
    </RSNavbar>
  );
};
