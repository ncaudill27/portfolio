import React from "react";
import { Link } from "gatsby";

import StyledLink from "./typography/navLink";

const NavLink = ({ to, ...props }) => {
  const isActive = () => {
    if (typeof window !== "undefined") {
      return window.location.pathname === to;
    }
  };

  const activeColor = () => (isActive() ? "var(--color-primary)" : "var(--color-text)");
  const activeBackground = () => (isActive() ? "var(--color-text-transparent)" : "transparent");

  return (
    <StyledLink
      as={Link}
      to={to}
      style={{
        "--color": activeColor(),
        "--background-color": activeBackground()
      }}
      {...props}
    />
  );
};

export default NavLink;
