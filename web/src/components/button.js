import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  width: fit-content;
  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-1);
  padding: var(--spacing-0) var(--spacing-3);
  color: var(--color-background);
  background-color: var(--color-primary);
  border: none;
  border-radius: 2px;
  appearance: none;

  font-family: var(--font-family-primary);
  text-transform: uppercase;

  &:hover {
    background-color: var(--color-primary-muted);
    cursor: pointer;
  }

  &:disabled {
    background-color: var(--color-text-transparent);
    cursor: wait;
  }
`;

export default Button;
