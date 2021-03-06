import styled from "styled-components";

export default styled.span`
  display: block;
  padding: var(--spacing-0) var(--spacing-1);
  /* margin-bottom: var(--spacing-1); */

  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-medium);
  color: var(--color);
  font-size: 1rem;
  text-decoration: none;

  border-radius: 2px;
  background-color: var(--background-color);

  &:hover {
    background-color: var(--color-text-transparent);
  }
`;
