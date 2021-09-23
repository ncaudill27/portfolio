import styled from "styled-components";
import Project from "../project";

export default styled.p`
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-light);
  color: var(--color-text);
  font-size: 18px;

  & + p {
    padding-top: var(--spacing-1);
  }
`;
