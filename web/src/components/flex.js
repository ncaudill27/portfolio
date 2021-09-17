import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Flex = ({ justify, align, gap, ...props }) => {
  return (
    <StyledFlex
      style={{
        "--justify": justify,
        "--align": align,
        "--gap": gap + "px"
      }}
      {...props}
    />
  );
};

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
  gap: PropTypes.number
};

const StyledFlex = styled.div`
  display: flex;
  justify-content: var(--justify);
  align-items: var(--align);
  gap: var(--gap);
`;

export default Flex;
