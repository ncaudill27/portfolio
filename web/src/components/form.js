import React from "react";
import styled from "styled-components";

import Label from "./typography/label";

const Form = ({
  name,
  email,
  message,
  loading,
  response,
  emailError,
  serverError,
  honeypot,
  setName,
  setEmail,
  setMessage,
  setHoneypot,
  handleChange,
  handleSubmit
}) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Honeypot htmlFor="firstName">
        First Name
        <StyledInput id="firstName" value={honeypot} onChange={handleChange(setHoneypot)} />
      </Honeypot>
      <Label htmlFor="name">
        Name
        <StyledInput id="name" value={name} onChange={handleChange(setName)} />
      </Label>
      <Label htmlFor="email">
        Email
        <StyledInput id="email" value={email} onChange={handleChange(setEmail)} />
      </Label>
      <Label htmlFor="message">
        Message
        <StyledInput
          as="textarea"
          rows="6"
          id="message"
          value={message}
          onChange={handleChange(setMessage)}
        />
      </Label>
      <StyledButton disabled={loading}>Submit</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  padding-top: var(--spacing-1);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0);
`;

const Honeypot = styled(Label)`
  display: none;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 2px var(--spacing-0);
  background-color: var(--color-background-alt);
  border: 1px solid hsl(183, 38%, 93%);
  outline-color: var(--color-text);
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-regular);
  color: var(--color-text);
`;

const StyledButton = styled.button`
  width: fit-content;
  padding: var(--spacing-0) var(--spacing-3);
  color: var(--color-background);
  background-color: var(--color-primary);
  border: none;
  border-radius: 2px;
  appearance: none;

  font-family: var(--font-family-primary);
  text-transform: uppercase;

  &:hover,
  &:focus {
    background-color: var(--color-primary-muted);
    cursor: pointer;
  }

  &:disabled {
    background-color: var(--color-text-transparent);
    cursor: wait;
  }
`;

export default Form;
