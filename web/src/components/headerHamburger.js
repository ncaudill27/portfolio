import React from "react";
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
import { useSpring, animated } from "react-spring";

import "@reach/menu-button/styles.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <Menu>
      <MenuButton>
        <Hamburger
          label="Show menu"
          rounded
          toggle={toggleOpen}
          toggled={isOpen}
        />
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuLink to="view">View</MenuLink>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu