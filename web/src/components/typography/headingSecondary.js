import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Heading = styled.h2`
  ${props =>
    !props.noMargin &&
    css`
      margin-top: var(--spacing-5);
      margin-bottom: var(--spacing-1);
    `};
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-shade);
  line-height: 1.05;
  /* ----------
    FONT SIZE VARIABLES
  ---------- */
  --type-fontsize-min: ${23 / 16}rem;
  --type-fontsize-max: ${48 / 16}rem;
  --type-fontsize-value: 0.91em + 2.55vw;
  font-size: clamp(var(--type-fontsize-min), var(--type-fontsize-value), var(--type-fontsize-max));
`;

Heading.propTypes = {
  noMargin: PropTypes.bool
};

export default Heading;
