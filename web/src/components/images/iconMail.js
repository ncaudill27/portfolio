import React from "react";

const MailIcon = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: 50,
      height: 50
    }}
  >
    <circle cx="100" cy="100" r="100" fill="var(--color-text)" />
    <path
      d="M31 127V76.1754C31 72.438 34.9508 70.0218 38.2778 71.7244L97.7222 102.145C99.1525 102.877 100.847 102.877 102.278 102.145L161.722 71.7244C165.049 70.0218 169 72.438 169 76.1754V127C169 129.761 166.761 132 164 132H36C33.2386 132 31 129.761 31 127Z"
      stroke="var(--color-background)"
      stroke-width="8"
    />
    <path d="M31 132L90 98" stroke="var(--color-background)" stroke-width="3" />
    <path d="M169 132L110 98" stroke="var(--color-background)" stroke-width="3" />
    <path
      d="M31 93V71C31 68.2386 33.2386 66 36 66H164C166.761 66 169 68.2386 169 71V98"
      stroke="var(--color-background)"
      stroke-width="8"
    />
  </svg>
);

export default MailIcon;
