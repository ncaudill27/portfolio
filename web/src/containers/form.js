import React, { useState } from "react";
import { validateEmail } from "../lib/emailValidation";

import StyledForm from "../components/form";
import Toast from "./formToast";

const Form = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
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
    e.preventDefault();
    if (!!honeypot) return; // kick out if honeypot filled
    // clear any current responses
    await setResponse("");
    // call validation function to check inputs
    const { validEmail, error: emailError } = await validateEmail(email);
    if (!validEmail) {
      await setEmailError(true);
      await setResponse(emailError);
      return; // kick out if invalid email
    }

    await setLoading(true);
    const contactData = {
      message,
      contactName: name,
      contactEmail: email
    };
    const fetchObj = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify(contactData)
    };
    const response = await fetch("/.netlify/functions/send-contact-email", fetchObj);
    const { data, error } = await response.json();
    await setLoading(false);

    if (error) {
      console.log(error);
      setResponse("Oh no! It looks like service is down. Try again soon.");
    }

    if (data) {
      resetState();
      setResponse(data);
    }
  };

  const formLogic = {
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
    setLoading,
    setResponse,
    setEmailError,
    serverError,
    setHoneypot,
    resetState,
    handleChange,
    handleSubmit
  };

  return (
    <>
      {!!response && <Toast response={response} setResponse={setResponse} />}
      <StyledForm onSubmit={handleSubmit} {...{ ...formLogic, ...props }} />
    </>
  );
};

export default Form;
