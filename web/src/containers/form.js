import React, { useState } from "react";
import { validateEmail } from "../utils/emailValidation";

import Button from "./button";
import TextField from "./textField";

const Form = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const resetState = () => {
    setName("");
    setEmail("");
    setMessage("");
    setResponse("");
    setLoading(false);
    setEmailError(false);
    setServerError(false);
  };

  const handleChange = setFn => e => {
    setFn(e.target.value);
  };

  const handleSubmit = async e => {
    if (!!honeypot) return;

    e.preventDefault();
    // clear any current responses
    setResponse([]);
    // call validation function to check inputs and log any discrepancies
    const { validEmail, error } = await validateEmail(email);
    // update styling if errors
    // if (!validName) setNameError(true)
    if (!validEmail) setEmailError(true);
    // block from sending request to mailchimp if not validated
    if (!validEmail) return;

    setLoading(true);
    fetch("/.netlify/functions/send-contact-email", {
      message,
      contactName: name,
      contactEmail: email
    });
    setLoading(false);

    if (error) {
      updateResponse(error);
      setServerError(true);
      return; // kick out response
    }

    updateResponse("You're all signed up! Thank you!");
    //? anything useful we can do with the return data
    //? possibly log is somewhere
  };

  return (
    <StyledForm onSubmit={handleSubmit} resetForm={resetState} {...props}>
      <Response
        style={{
          "--color": emailError || serverError ? "red" : "green"
        }}
      >
        {response.map(response => (
          <div key={response}>{response}</div>
        ))}
      </Response>
      <InputsWrapper>
        <div style={{ display: "none" }}>
          <label htmlFor="name">Name</label>
          <input id="name" value={honeypot} onChange={handleChange(setHoneypot)} />
        </div>
        <TextField
          id="email"
          value={email}
          placeholder="Please enter your email"
          onChange={handleChange(setEmail)}
          disabled={loading}
          error={emailError}
        />
      </InputsWrapper>
      <Button disabled={loading} onKeyDown={handleEscKey(props.closeForm)}>
        Join
      </Button>
    </StyledForm>
  );
};
