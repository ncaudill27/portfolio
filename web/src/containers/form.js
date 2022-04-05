import React, { useState } from "react";
import { toast } from "react-toastify";
import { validEmail } from "../lib/string-utils";

import StyledForm from "../components/form";
import Toast from "../components/toast";

const Form = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const contactData = {
    message,
    contactName: name,
    contactEmail: email
  };

  const emailRequestObj = {
    method: "POST",
    header: {
      "Content-Type": "application/json",
      Accepts: "application/json"
    },
    body: JSON.stringify(contactData)
  };

  const resetState = () => {
    setName("");
    setEmail("");
    setMessage("");
    setLoading(false);
  };

  const handleChange = setFn => e => {
    setFn(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!!honeypot) return; // kick out if honeypot filled

    // send back empty email fields
    if (email === "") {
      toast.error("Email cannot be empty.");
      return;
    }

    // call validation function to check inputs
    if (!validEmail(email)) {
      toast.error("Please enter a valid email.");
      return; // kick out if invalid email
    }

    await setLoading(true);

    await toast.promise(fetch("/.netlify/functions/send-contact-email", emailRequestObj), {
      pending: "Sending...",
      success: "Thanks for reaching out! I'll be in touch soon.",
      error: "Oh no! It looks like something went wrong. Try again soon."
    });
    await setLoading(false);

    resetState();
  };

  const formLogic = {
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
  };

  return (
    <>
      <Toast />
      <StyledForm {...{ ...formLogic, ...props }} />
    </>
  );
};

export default Form;
