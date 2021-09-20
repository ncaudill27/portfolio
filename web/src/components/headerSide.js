import React from "react";
import styled from "styled-components";
import Link from "./headerLink";

import Flex from './flex'

const Header = ({ siteTitle, onHideNav, onShowNav, showNav }) => (
  <StyledHeader>
    <StyledNav>
      <Flex as="ul" role="list" justify="center" stack>
        <li>
          {/* <Link to="/">
            <LogoPlaceholder />
          </Link> */}
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to="/projects/">Projects</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
      </Flex>
    </StyledNav>
  </StyledHeader>
);

const StyledHeader = styled.header`
  padding-top: var(--spacing-2);
  color: var(--color-text);

  @media (max-width: 700px) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  position: sticky;
  top: var(--spacing-4);
`;

const LogoPlaceholder = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: var(--color-text);
`;

export default Header;
