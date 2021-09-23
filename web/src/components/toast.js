import React from "react";
import styled, { css } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ response, error, reset }) => {
  toast(response, { type: !error ? "success" : "error", onClose: () => reset() });

  return <StyledToast position="top-center" error={error} />;
};

const StyledToast = styled(ToastContainer).attrs({})`
  .Toastify__toast {
    background-color: var(--color-background-alt);
    box-shadow: none;
  }

  .Toastify__toast-body {
    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-light);
  }

  .Toastify__progress-bar {
    ${props =>
      !props.error &&
      css`
        background-color: var(--color-primary);
      `};
  }
`;
export default Toast;
