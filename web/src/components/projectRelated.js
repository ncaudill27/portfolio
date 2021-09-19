import React from "react";
import styled from "styled-components";
import Link from "./typography/navLink";

import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const RelatedProjects = ({ list }) => (
  <>
    {list.map(project => (
      <li key={`related_${project._id}`}>
        <StyledLink to={`/project/${project.slug.current}`}>
          <img
            src={imageUrlFor(buildImageObj(project.mainImage))
              .width(30)
              .height(30)
              // .fit('fill')
              .url()}
            alt={project.mainImage.alt}
          />
          <span>{project.title}</span>
        </StyledLink>
      </li>
    ))}
  </>
);

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  color: var(--color-primary);

  cursor: pointer;
`;

export default RelatedProjects;
