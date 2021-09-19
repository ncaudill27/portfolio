import React from "react";
import styled from "styled-components";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const Stack = ({ list }) => (
  <>
    {list.map(({ title, logo }) => (
      <TechWrapper>
        <img
          src={imageUrlFor(buildImageObj(logo)).url()}
          alt={logo}
          style={{ width: "25px", height: "auto" }}
        />
        {title}
      </TechWrapper>
    ))}
  </>
);

const RootWrapper = styled.div``;

const TechWrapper = styled.li`
  display: flex;
  gap: var(--spacing-1);
  align-items: center;

  color: var(--color-text);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
`;

export default Stack;
