import styled from "styled-components";

export default styled.h1`
  padding-bottom: var(--spacing-0);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-black);
  color: var(--color-text-shade);
  line-height: 1.05;
  /* ----------
    FONT SIZE VARIABLES
  ---------- */
  --type-fontsize-min: 2.5em; /* 40px */
  --type-fontsize-max: 4em; /* 64px */
  --type-fontsize-value: 0.73em + 4.36vw;
  font-size: clamp(var(--type-fontsize-min), var(--type-fontsize-value), var(--type-fontsize-max));
`;
