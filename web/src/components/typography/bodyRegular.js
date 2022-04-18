import React from "react";
import styled from "styled-components";
import { emDasher } from "../../lib/string-utils";

const Body = ({ children, ...props }) => {
  return <StyledBody {...props}>{React.Children.map(children, emDasher)}</StyledBody>;
};

const StyledBody = styled.p`
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-regular);
  color: var(--color-text);

  font-size: 18px;

  & + &:not(ul &) {
    padding-top: var(--spacing-1);
  }

  ul &:not(:first-child) {
    padding-top: var(--spacing-0);
  }
`;

export default Body;
