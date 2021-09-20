import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Flex from "./flex";

const Header = ({siteTitle, onHideNav, onShowNav, showNav}) => (
  <StyledHeader>
    <StyledNav>
      <Flex as="ul" role="list" justify="center" align="flex-end" gap={5}>
        <li>
          <StyledLink to="/projects/">Projects</StyledLink>
        </li>
        <li>
          <Link to="/">
            <LogoPlaceholder />
          </Link>
        </li>
        <li>
          <StyledLink to="/blog/">Blog</StyledLink>
        </li>
      </Flex>
    </StyledNav>
  </StyledHeader>
);

const StyledHeader = styled.header`
  margin-top: 40px;
`;

const StyledNav = styled.nav`
  color: var(--color-text);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const LogoPlaceholder = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: var(--color-text);
`;

const StyledLink = styled(Link)`
  display: block;
  width: 64.84px;
  margin-bottom: var(--spacing-1);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-medium);
  color: inherit;
  font-size: 16px;
  text-decoration: none;
`;

export default Header;
