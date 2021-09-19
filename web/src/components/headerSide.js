import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Flex from "./flex";

const Header = ({ siteTitle, onHideNav, onShowNav, showNav }) => (
  <header>
    <StyledNav>
      <Flex as="ul" role="list" justify="center" gap={1} stack>
        <li>
          <Link to="/">
            <LogoPlaceholder />
          </Link>
        </li>
        <li>
          <StyledLink to="/projects/">Projects</StyledLink>
        </li>
        <li>
          <StyledLink to="/blog/">Blog</StyledLink>
        </li>
      </Flex>
    </StyledNav>
  </header>
);

const StyledHeader = styled.header`
  padding-top: var(--spacing-2);
  color: var(--color-text);
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

const StyledLink = styled(Link)`
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-medium);
  color: inherit;
  font-size: 16px;
  text-decoration: none;
`;

export default Header;
