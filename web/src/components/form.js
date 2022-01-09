import React from "react";
import styled from "styled-components";

import Label from "./typography/label";
import Button from "./button";

const Form = ({
  name,
  email,
  message,
  loading,
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
      <Button disabled={loading}>Send message</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin-top: var(--spacing-1);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0);

  @media (max-width: 543px) {
    padding-left: var(--spacing-1);
    padding-right: var(--spacing-1);
  }
`;

const Honeypot = styled(Label)`
  display: none;
`;

const StyledInput = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 2px var(--spacing-0);
  background-color: var(--color-background-io);
  border: 1px solid hsl(183, 38%, 93%);
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-tint);
`;

export default Form;
