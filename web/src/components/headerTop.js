import React from "react";
import styled from "styled-components";

import Link from "./headerLink";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledList role="list">
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin-top: var(--responsive-top-spacing-2);
  text-align: center;
`;

const StyledNav = styled.nav`
  color: var(--color-text);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--spacing-0);
`;

export default Header;
