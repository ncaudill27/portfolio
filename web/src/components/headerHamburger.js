import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Cross as Hamburger } from "hamburger-react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import Portal from "@reach/portal";
import VisuallyHidden from "@reach/visually-hidden";
import { useTransition, animated, config } from "@react-spring/web";

import Trail from "./trail";

const HamburgerMenu = () => {
  const data = useStaticQuery(projectsQuery);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => setIsOpen(prev => !prev);
  const close = () => setIsOpen(false);

  const transitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow
  });

  return (
    <>
      <Portal>
        <ExteriorButton
          onClick={toggleOpen}
          style={{
            "--background-color": isOpen ? "none" : "hsl(183deg, 58%, 95%, 0.85)",
            "--blur": isOpen ? "none" : "blur(5px)"
          }}
        >
          <VisuallyHidden>Toggle navigation menu</VisuallyHidden>
          <Hamburger size={25} label={isOpen ? "Close menu" : "Open menu"} toggled={isOpen} />
        </ExteriorButton>
      </Portal>
      {transitions(
        (styles, item) =>
          item && (
            <StyledModal style={{ ...styles }} aria-label="Site navigation">
              <Content onClick={close}>
                <CloseButton onClick={close}>
                  <VisuallyHidden>Close Button</VisuallyHidden>
                </CloseButton>
                <MenuList>
                  <Trail
                    isOpen={isOpen}
                    config={{
                      from: { transform: "translateX(-100%)", opacity: 0 },
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? "translateX(0)" : "translateX(-100%)",
                      config: config.stiff
                    }}
                  >
                    <MenuLink to="/">Home</MenuLink>
                    <MenuLink to="/projects/">Projects</MenuLink>
                    {data?.projects?.edges.map(({ node }) => (
                      <SubMenuLink key={node.title} to={`/projects/${node.slug.current}/`}>
                        {node.title}
                      </SubMenuLink>
                    ))}
                    <MenuLink to="/blog/">Blog</MenuLink>
                    <MenuLink to="/contact/">Contact</MenuLink>
                  </Trail>
                </MenuList>
              </Content>
            </StyledModal>
          )
      )}
    </>
  );
};

const ExteriorButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  padding: 0;

  background-color: var(--background-color);
  backdrop-filter: var(--blur);
  border: none;
  border-bottom-right-radius: 2px;
  z-index: 1;

  color: var(--color-text);

  @media (min-width: 915px) {
    display: none;
  }
`;

const CloseButton = styled(ExteriorButton)`
  height: 48px;
  width: 48px;
  background: transparent;
`;

const StyledModal = styled(animated(DialogOverlay))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: none;
  padding: 0;
  margin: 0;

  backdrop-filter: blur(5px);
  background-color: hsl(183deg, 58%, 95%, 0.85);
`;

const Content = styled(animated(DialogContent))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;

  border: none;
  background: none;
`;

const MenuList = styled.nav`
  position: fixed;
  top: 10%;
  left: 0;
  width: fit-content;
  z-index: 1;
  padding-bottom: 40px;
`;

const MenuLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: var(--spacing-1) var(--spacing-3);

  color: var(--color-text);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-black);
  font-size: 1.75em; //23px
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
`;

const SubMenuLink = styled(MenuLink)`
  padding-left: var(--spacing-7);
  font-size: 1.4375em; //23px
`;

const projectsQuery = graphql`
  query ProjectsQuery {
    projects: allSanitySampleProject {
      edges {
        node {
          slug {
            current
          }
          title
        }
      }
    }
  }
`;

export default HamburgerMenu;
