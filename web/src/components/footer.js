import React from "react";
import styled from "styled-components";

const Footer = () => <StyledFooter>Hello</StyledFooter>;

const StyledFooter = styled.footer`
  color: var(--color-background);
  height: 216px;
  background: linear-gradient(to bottom, var(--color-text-transparent), var(--color-text));
`;

export default Footer;
