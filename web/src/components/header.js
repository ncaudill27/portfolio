import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Body from "./typography/bodyRegular.js";

import Flex from "./flex";

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <nav>
      <Flex as="ul" role="list" justify="center" gap={40}>
        <li>
          <StyledLink to="/projects/">Projects</StyledLink>
        </li>
        <li>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </li>
        <li>
          <StyledLink to="/blog/">Blog</StyledLink>
        </li>
      </Flex>
    </nav>
  </StyledHeader>
);

const StyledHeader = styled.header`
  margin-top: 40px;
  height: 50px;
`;

const StyledLink = styled(Link)`
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  font-size: 16px;
  text-decoration: none;
`;

export default Header;
