import React from 'react';
import styled from "styled-components";

const Aside = ({ children }) => (
  <AsideWrapper>
    <StickyWrapper>{children}</StickyWrapper>
  </AsideWrapper>
);

const AsideWrapper = styled.aside`
  margin-top: var(--spacing-2);
  max-width: 690px;
  margin-left: auto;
  margin-right: auto;
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: var(--spacing-4);

  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

export default Aside;
