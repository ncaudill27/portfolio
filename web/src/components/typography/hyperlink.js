import styled from "styled-components";

export default styled.a`
  color: var(--color-primary);
  font-weight: var(--font-weight-semi-bold);
  transition: box-shadow 100ms ease 0s;
  box-shadow: 0px 0px 0px var(--color-primary);

  &:hover {
    cursor: pointer;
    color: var(--color-primary);
    box-shadow: 0px 2px 0px var(--color-primary);
  }
`;
