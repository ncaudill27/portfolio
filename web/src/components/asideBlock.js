import React from "react";
import styled from "styled-components";

const Aside = ({ children, ...props }) => {
  return <RootWrapper {...props}>{children}</RootWrapper>;
};

const RootWrapper = styled.div`
  margin-top: var(--spacing-5);
  margin-bottom: var(--spacing-7);

  padding: var(--spacing-3) var(--spacing-4);

  background-color: var(--color-background-alt);
`;

export default Aside;