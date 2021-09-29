import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Cross as Hamburger } from "hamburger-react";
import Dialog from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import { useSpring, animated } from "react-spring";
import "@reach/dialog/styles.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(prev => !prev);
  const close = () => setIsOpen(false);

  return (
    <RootWrapper>
      <ExteriorButton onClick={toggleOpen}>
        <VisuallyHidden>Toggle Navigation Menu</VisuallyHidden>
        <Hamburger label={isOpen ? "Close menu" : "Open menu"} />
      </ExteriorButton>
      <StyledModal isOpen={isOpen} onDismiss={close} aria-label="TODO">
        <StyledButton
          style={{
            "--width": isOpen ? "100%" : "",
            "--height": isOpen ? "100%" : ""
          }}
        >
          <Hamburger label={isOpen ? "Close menu" : "Open menu"} />
          <VisuallyHidden>Toggle Navigation Menu</VisuallyHidden>
        </StyledButton>
        <MenuList>
          <MenuLink to="/home/">Home</MenuLink>
          <MenuLink to="/projects/">Projects</MenuLink>
          <MenuLink to="/blog/">Blog</MenuLink>
        </MenuList>
      </StyledModal>
    </RootWrapper>
  );
};

const RootWrapper = styled.div`
  isolation: isolate;

  @media (min-width: 700px) {
    display: none;
  }
`;

const ExteriorButton = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  
  background-color: hsl(183deg, 58%, 95%, 0.85);
  backdrop-filter: blur(5px);
  border: none;
  border-radius: 2px;
  z-index: 1;
`;

const StyledModal = styled(Dialog)`
  position: fixed
`;

const StyledButton = styled.button`
  background-color: hsl(183deg, 58%, 95%, 0.85);
  backdrop-filter: blur(5px);
  border: none;
  border-radius: 2px;

  z-index: 1;
`;

const MenuLink = styled(Link)``;

const MenuList = styled.div``;

export default HamburgerMenu;
