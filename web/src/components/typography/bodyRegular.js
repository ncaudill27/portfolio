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

  --type-fontsize-min: 1.125em; // 18px
  --type-fontsize-max: ${21 / 16}rem; // 23px
  --type-fontsize-value: 1.02em + 0.41vw;
  font-size: clamp(var(--type-fontsize-min), var(--type-fontsize-value), var(--type-fontsize-max));
  & + &:not(ul &) {
    padding-top: var(--spacing-1);
  }

  ul &:not(:first-child) {
    padding-top: var(--spacing-0);
  }
`;

export default Body;
