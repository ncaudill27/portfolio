import React from 'react';
import styled from "styled-components";
import { emDasher } from '../../lib/string-utils';

import { CopyWrapper } from "../project";

const Body = ({children, ...props}) => {
  return (
    <StyledBody {...props}>
      {React.Children.map(children, emDasher)}
    </StyledBody>
  )
}

const StyledBody = styled.p`
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-regular);
  color: var(--color-text);
  font-size: 1em; // 18px

  & + & {
    padding-top: var(--spacing-1);
  }

  ${CopyWrapper} &:first-child {
    font-size: 1.125em; // 20px
    font-weight: var(--font-weight-medium);
  }
`;

export default Body