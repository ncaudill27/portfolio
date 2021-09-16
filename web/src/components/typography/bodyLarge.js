import styled from "styled-components"

export default styled.p`
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-regular);
  color: var(--color-text);
  /* ----------
    FONT SIZE VARIABLES
  ---------- */
  --type-fontsize-min: 1.125em; /* 18px */
  --type-fontsize-max: 1.4375em; /* 23px */
  --type-fontsize-value: 1.02em + 0.53vw;
  font-size: clamp(
    var(--type-fontsize-min),
    var(--type-fontsize-value),
    var(--type-fontsize-max)
  );
  /* ----------
    LINE HEIGHT VARIABLES
  ---------- */
  --type-lineheight-min: 1.333333333333;
  --type-lineheight-max: 1.391304347826;
  --type-lineheight-value: 1.3em + 0.98vw;
  line-height: clamp(
    var(--type-lineheight-min),
    var(--type-lineheight-value),
    var(--type-lineheight-max)
  );
`
