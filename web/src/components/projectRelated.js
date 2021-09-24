import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

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
  font-weight: var(--font-weight-bold);
  text-decoration: none;

  & > span {
    box-shadow: 0px 2px 0px var(--color-primary);
    transition: box-shadow 100ms ease 0s;
  }

  @media (min-width: 700px) {
    color: var(--color-primary);
    
    & > span {
      box-shadow: 0px 0px 0px var(--color-primary);
    }

    &:hover > span {
      cursor: pointer;
      color: var(--color-primary);
      box-shadow: 0px 2px 0px var(--color-primary);
    }
  }
`;

export default RelatedProjects;
