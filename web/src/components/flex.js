import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Flex = ({ justify, align, ...props }) => {
  console.log('flex', justify, align);
  return (
    <StyledFlex
      style={{
        "--justify": justify,
        "--align": align
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
  ])
};

const StyledFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: var(--justify);
  align-items: var(--align);
  gap: 40px;
`;

export default Flex;
