import styled from "styled-components";
import { CopyWrapper } from "../project";

export default styled.li`
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-regular);
  color: var(--color-text);
  font-size: 1em; // 18px

  & + & {
    padding-top: var(--spacing-0);
  }
`;
