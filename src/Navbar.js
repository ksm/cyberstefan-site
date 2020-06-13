import React from "react";
import { Navbar as RSNavbar, NavbarBrand, Badge } from "reactstrap";
import { version } from "../package.json";

export const Navbar = () => {
  return (
    <RSNavbar color="light">
      <NavbarBrand>
        CyberStefan Stream Dashboard{" "}
        <Badge
          href="https://github.com/cyberstefantv/cyberstefan-site/blob/master/CHANGELOG.md"
          color="primary"
        >
          v{version}
        </Badge>{" "}
        <a href="https://github.com/cyberstefantv/cyberstefan-site/blob/master/.releaserc.json">
          <img
            src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat"
            alt="semantic-release"
          />
        </a>
      </NavbarBrand>
    </RSNavbar>
  );
};
