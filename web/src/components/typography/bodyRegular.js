import styled from "styled-components";
import { CopyWrapper } from "../project";

export default styled.p`
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-light);
  color: var(--color-text);
  font-size: 1.125em; // 18px

  & + & {
    padding-top: var(--spacing-1);
  }

  ${CopyWrapper} &:first-of-type {
    font-size: 1.25em; // 20px
  }
`;
