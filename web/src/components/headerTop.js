import React from "react";
import styled from "styled-components";

import Link from "./headerLink";

const Header = ({ siteTitle, onHideNav, onShowNav, showNav }) => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledList role="list">
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            {/* <Link to="/">
              <LogoPlaceholder />
            </Link> */}
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
  margin-top: 40px;
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

const LogoPlaceholder = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: var(--color-text);
`;

export default Header;
