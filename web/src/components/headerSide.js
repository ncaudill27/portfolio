import React from "react";
import styled from "styled-components";
import Link from "./headerLink";

import Flex from "./flex";

const Header = () => (
  <StyledHeader>
    <StyledNav>
      <Flex as="ul" role="list" justify="center" align="flex-end" gap={0} stack>
        <li>
          <Link to="/">Home</Link>
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

  @media (max-width: 915px) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  position: sticky;
  top: calc(var(--spacing-4) - 4px);  // make up for padding of navLinks
`;

export default Header;
