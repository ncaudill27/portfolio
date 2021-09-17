import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MaxWidthWrapper = ({ children, width, ...props }) => (
  <Wrapper
    style={{
      "--max-width": width + "px"
    }}
    {...props}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: var(--max-width);
  width: 100%;
`;

Wrapper.propTypes = {
  width: PropTypes.number.isRequired
};

export default MaxWidthWrapper;
