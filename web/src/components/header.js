import React from "react";
import styled from 'styled-components'
import { Link } from "gatsby";

import Flex from './flex'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <nav>
      <Flex as='ul' role='list' justify="center">
        <li>
          <Link to="/projects/">Projects</Link>
        </li>
        <li>
          <Link to="/">{siteTitle}</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
      </Flex>
    </nav>
  </StyledHeader>
);

const StyledHeader = styled.header`
  margin-top: 40px;
  height: 50px;
`;

export default Header;
