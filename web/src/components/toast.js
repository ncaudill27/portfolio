import React from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return <StyledToast position="top-center" />;
};

const StyledToast = styled(ToastContainer).attrs({})`
  .Toastify__toast {
    background-color: var(--color-background-io);
    box-shadow: none;
  }

  .Toastify__toast-body {
    font-family: var(--font-family-secondary);
    color: var(--color-text-tint);
  }
`;
export default Toast;
