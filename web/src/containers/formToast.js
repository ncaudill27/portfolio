import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ response, setResponse }) => {
  toast(response, { type: "success", onClose: () => setResponse("") });

  return <StyledToast position="top-center" />;
};

const StyledToast = styled(ToastContainer).attrs({})`
  .Toastify__toast {
    background-color: var(--color-background-alt);
    box-shadow: none;
  }

  .Toastify__toast-body {
    font-family: var(--font-family-secondary);
  }

  .Toastify__progress-bar {
    background-color: var(--color-primary);
  }
`;
export default Toast;
