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

import "@reach/menu-button/styles.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <Menu>
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
      <MenuList>
        <MenuLink as={Link} to="/home/">Home</MenuLink>
        <MenuLink as={Link} to="/projects/">Projects</MenuLink>
        <MenuLink as={Link} to="/blog/">Blog</MenuLink>
      </MenuList>
    </Menu>
  );
};

const StyledButton = styled(MenuButton)`
  position: fixed;
  top: var(--spacing-0);
  left: var(--spacing-0);

  background-color: var(--color-background-alt);
  border: none;
`;

export default HamburgerMenu