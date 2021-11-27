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
          "--visibility": !isOpen ? "visible" : "hidden",
          "--margin": isOpen ? 0 : "var(--spacing-1)",
          "--height": isOpen ? 0 : "fit-content"
        }}
        variant="ghost"
        onClick={open}
      >
        Show more
        <Down />
      </ExpandButton>
      <ExpandContent
        style={{
          "--visibility": isOpen ? "visible" : "hidden",
          "--height": isOpen ? "fit-content" : 0 + "px"
        }}
      >
        {children}
      </ExpandContent>
    </>
  );
};

const ExpandButton = styled(Button)`
  height: var(--height);

  display: flex;
  align-items: center;
  gap: var(--spacing-0);

  padding: 0;
  margin-top: var(--margin);
  margin-bottom: 0;

  color: var(--color-text);
  background: inherit;
  visibility: var(--visibility);

  &:hover {
    cursor: pointer;
    background-color: inherit;
  }
`;

const ExpandContent = styled.div`
  margin-top: var(--spacing-1);

  visibility: var(--visibility);
  height: var(--height);

  transition: all 350ms ease;
`;

export default Expandable;
