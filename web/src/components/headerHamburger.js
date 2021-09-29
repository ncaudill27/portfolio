import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { Cross as Hamburger } from "hamburger-react";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink
} from "@reach/menu-button";
import VisuallyHidden from "@reach/visually-hidden";
import { useSpring, animated } from "react-spring";


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <StyledMenu>
      <StyledButton>
        <VisuallyHidden>
          Navigation Menu
        </VisuallyHidden>
        <Hamburger
          label="Menu Button"
          toggle={toggleOpen}
          toggled={isOpen}
        />
      </StyledButton>
      <StyledMenuList >
        <MenuLink as={Link} to="/home/">Home</MenuLink>
        <MenuLink as={Link} to="/projects/">Projects</MenuLink>
        <MenuLink as={Link} to="/blog/">Blog</MenuLink>
      </StyledMenuList>
    </StyledMenu>
  );
};

const StyledMenu = styled(Menu)`
  isolation: isolate;
`;

const StyledButton = styled(MenuButton)`
  position: fixed;
  top: 0;
  left: 0;

  background-color: hsl(183deg, 58%, 95%, 0.85);
  backdrop-filter: blur(5px);
  border: none;
  border-radius: 2px;

  z-index: 1;
`;

const StyledMenuList = styled(MenuList)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsl(183deg, 58%, 95%, 0.85);
  backdrop-filter: blur(5px);
`;

export default HamburgerMenu