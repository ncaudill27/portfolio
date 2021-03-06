import React from "react";
import styled from "styled-components";

import Flex from "./flex";
import Title from "./typography/headingTertiary";

const AsideCategory = ({ title, children }) => (
  <RootWrapper stack gap={0}>
    <Title noMargin>{title}</Title>
    <Flex as="ul" role="list" stack gap={0}>
      {children}
    </Flex>
  </RootWrapper>
);

const RootWrapper = styled(Flex)`
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);

  font-family: var(--font-family-primary);
`;

export default AsideCategory;
