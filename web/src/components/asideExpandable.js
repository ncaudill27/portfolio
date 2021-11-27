import React from "react";
import styled from "styled-components";

import Down from "./images/iconDownArrow";
import Button from "./button";

const Expandable = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const open = () => setIsOpen(true);

  return (
    <>
      <ExpandButton
        style={{
          "--display": !isOpen ? "flex" : "none"
        }}
        variant="ghost"
        onClick={open}
      >
        Show more
        <Down />
      </ExpandButton>
      <ExpandContent
        style={{
          "--display": isOpen ? "block" : "none",
          "--height": isOpen ? 1000 + "px" : 0 + "px"
        }}
      >
        {children}
      </ExpandContent>
    </>
  );
};

const ExpandButton = styled(Button)`
  display: var(--display);
  align-items: center;
  gap: var(--spacing-0);

  padding: 0;
  margin-top: var(--spacing-1);

  color: var(--color-text);
  background: inherit;

  &:hover {
    cursor: pointer;
    background-color: inherit;
  }
`;

const ExpandContent = styled.div`
  display: var(--display);
  height: var(--height);
  margin-top: var(--spacing-1);

  transition: height 350ms ease;
`;

export default Expandable;
