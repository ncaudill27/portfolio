import React from "react";
import styled from "styled-components";

import Heading from "./typography/headingTertiary";

const Aside = ({ title, children, ...props }) => {
  return (
    <RootWrapper {...props}>
      {!!title && <Title noMargin>{title}</Title>}
      {children}
    </RootWrapper>
  );
};

export const RootWrapper = styled.aside`
  margin-top: var(--spacing-5);
  margin-bottom: var(--spacing-7);

  padding: var(--spacing-3) var(--spacing-2);

  background-color: var(--color-background-alt);

  border-radius: 2px;

  box-shadow: 
    5px 5px var(--color-background), // border matching background to create space
    8px 8px var(--color-primary-muted); // offset bottom-right border

  @media (min-width: 860px) {
    margin-left: calc(var(--spacing-4) * -1);
    margin-right: calc(var(--spacing-4) * -1);
    padding: var(--spacing-3) var(--spacing-4);
  }
`;

const Title = styled(Heading)`
  margin-bottom: var(--spacing-1);
  text-transform: uppercase;
`;

export default Aside;
