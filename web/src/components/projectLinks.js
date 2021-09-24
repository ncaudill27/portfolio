import React from "react";
import styled from "styled-components";

const Links = ({ list }) => (
  <>
    {list.map(({ title, url }) => (
      <li key={url}>
        <StyledLink href={url}>{title}</StyledLink>
      </li>
    ))}
  </>
);

const StyledLink = styled.a`
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  text-decoration: none;

  transition: box-shadow 100ms ease 0s;
  box-shadow: 0px 2px 0px var(--color-primary);

  @media (min-width: 700px) {
    color: var(--color-primary-muted);
    box-shadow: 0px 0px 0px var(--color-primary);

    &:hover {
      cursor: pointer;
      color: var(--color-primary);
      box-shadow: 0px 2px 0px var(--color-primary);
    }
  }
`;

export default Links;
