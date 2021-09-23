import React from "react";
import styled from "styled-components";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import ProjectPreview from "./project-preview";

const Stack = ({ list, iconOnly }) => (
  <>
    {list.map(({ title, logo }) => (
      <TechWrapper>
        <StyledIcon src={imageUrlFor(buildImageObj(logo)).url()} alt={logo} />
        {!iconOnly && title}
      </TechWrapper>
    ))}
  </>
);

const TechWrapper = styled.li`
  display: flex;
  gap: var(--spacing-1);
  align-items: center;

  color: var(--color-text);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
`;

const StyledIcon = styled.img`
  width: 25px;
  min-width: 25px;
  height: auto;
`;

export default Stack;
