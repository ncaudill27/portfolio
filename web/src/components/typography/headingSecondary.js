import styled, { css } from "styled-components";

export default styled.h2`
  ${props =>
    !props.noPadding &&
    css`
      padding-top: var(--spacing-1);
      padding-bottom: var(--spacing-0);
    `};
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  line-height: 1.05;
  /* ----------
    FONT SIZE VARIABLES
  ---------- */
  --type-fontsize-min: 1.4375em; /* 23px */
  --type-fontsize-max: 3em; /* 48px */
  --type-fontsize-value: 0.91em + 2.55vw;
  font-size: clamp(var(--type-fontsize-min), var(--type-fontsize-value), var(--type-fontsize-max));
`;
