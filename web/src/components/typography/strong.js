import styled from "styled-components";
import { RootWrapper } from "../asideBlock";

export default styled.strong`
  font-weight: var(--font-weight-bold);
  color: var(--color-secondary);

  ${RootWrapper} & {
    color: inherit;
  }
`;
