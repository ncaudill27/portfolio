import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Flex = ({ justify, align, gap, stack, wrap, ...props }) => {
  return (
    <StyledFlex
      style={{
        "--justify": justify,
        "--align": align,
        "--gap": `var(--spacing-${gap})`,
        "--direction": stack ? "column" : "row",
        "--wrap": wrap ? "wrap" : "nowrap"
      }}
      {...props}
    />
  );
};

const StyledFlex = styled.div`
  display: flex;
  flex-direction: var(--direction);
  flex-wrap: var(--wrap);
  justify-content: var(--justify);
  align-items: var(--align);
  gap: var(--gap);
`;

Flex.propTypes = {
  justify: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  align: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "baseline",
    "space-evenly"
  ]),
  gap: PropTypes.number,
  stack: PropTypes.bool,
  wrap: PropTypes.bool
};

export default Flex;
