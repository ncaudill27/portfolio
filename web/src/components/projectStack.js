import React from "react";
import styled from "styled-components";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import Flex from "./flex";
import LordIcon from "./lordIcon";

const Stack = ({ stack }) => (
  <Flex as='ul' stack gap={0} role='list'>
    <TechWrapper>
      <LordIcon />
      Stack
    </TechWrapper>
    {stack.map(({ title, logo }) => (
      <TechWrapper>
        <img
          src={imageUrlFor(buildImageObj(logo)).url()}
          alt={logo}
          style={{ width: "100%", height: "100%" }}
        />
        {title}
      </TechWrapper>
    ))}
  </Flex>
);

const RootWrapper = styled.div`
`;

const TechWrapper = styled.li`
  padding: 0 var(--spacing-1);
  display: grid;
  grid-template-columns: 35px 1fr;
  gap: var(--spacing-4);
  align-items: center;

  color: var(--color-text);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);

  &:first-of-type {
    font-size: 20px;
    border-bottom: 1px solid var(--color-primary);
  }
`;

export default Stack;
