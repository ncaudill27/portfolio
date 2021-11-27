import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Heading = styled.h3`
  ${props =>
    !props.noMargin &&
    css`
      margin-top: var(--spacing-5);
      margin-bottom: var(--spacing-1);
    `};
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-black);
  font-size: 1.4375em; //23px
  font-weight: var(--font-weight-bold);
  color: var(--color-text-shade);
  line-height: 1.05;
`;

Heading.propTypes = {
  noMargin: PropTypes.bool
};

export default Heading;
