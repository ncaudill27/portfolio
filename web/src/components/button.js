import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ variant = "fill", children, ...props }) => {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else if (variant === "ghost") {
    Component = GhostButton;
  }

  return <Component {...props}>{children}</Component>;
};

const ButtonBase = styled.button`
  width: fit-content;
  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-1);
  padding: var(--spacing-0) var(--spacing-3);
  border: 2px solid transparent;
  border-radius: 2px;
  appearance: none;

  font-family: var(--font-family-primary);

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: var(--color-text-transparent);
    cursor: wait;
  }
`;

const FillButton = styled(ButtonBase)`
  color: var(--color-background);
  background-color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary-muted);
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: var(--color-background);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);

  &:hover {
    background-color: var(--color-background-muted);
    color: var(--color-primary-muted);
  border: 2px solid var(--color-primary-muted);
  }
`

const GhostButton = styled(ButtonBase)`
  background-color: transparent;
  color: var(--color-text-alt);

  &:hover {
    background-color: var(--color-text-transparent);
  }
`;

Button.propTypes = {
  variant: PropTypes.oneOf(["fill", "variant", "ghost"]).isRequired
}

export default Button;
