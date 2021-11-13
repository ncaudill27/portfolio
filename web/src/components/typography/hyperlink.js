import styled from "styled-components";

export default styled.a`
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  transition: box-shadow 100ms ease 0s;
  box-shadow: 0px 2px 0px var(--color-primary);

  will-change: box-shadow;

  @media (min-width: 915px) {
    box-shadow: 0px 0px 0px var(--color-background);

    &:hover {
      cursor: pointer;
      color: var(--color-primary);
      box-shadow: 0px 2px 0px var(--color-primary);
    }
  }
`;
