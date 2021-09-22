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
  setServerError,
  honeypot,
  setName,
  setEmail,
  setMessage,
  setLoading,
  setResponse,
  setEmailError,
  setHoneypot,
  resetState,
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
      <button>Submit</button>
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
  background-color: hsl(0, 0%, 97%);
  border: 1px solid hsl(183, 38%, 93%);
  outline-color: var(--color-text);
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-regular);
  color: var(--color-text);
`;

export default Form;
