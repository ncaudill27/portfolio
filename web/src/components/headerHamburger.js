import React from "react";
import { Link, StaticQuery, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Cross as Hamburger } from "hamburger-react";
import Dialog from "@reach/dialog";
import Portal from "@reach/portal";
import VisuallyHidden from "@reach/visually-hidden";
import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
  config
} from "@react-spring/web";
import "@reach/dialog/styles.css";

const HamburgerMenu = () => {
  const data = useStaticQuery(projectsQuery);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => setIsOpen(prev => !prev);
  const close = () => setIsOpen(false);

  const springApi = useSpringRef();
  const containerStyles = useSpring({
    ref: springApi,
    from: { opacity: 0 },
    to: { opacity: 1, backdropFilter: 'blur(5px)' },
    reset: () => !isOpen,
    config: config.slow
  });

  const transitionApi = useSpringRef();
  const linkTransition = useTransition(
    isOpen
      ? [
          <MenuLink to="/">Home</MenuLink>,
          <MenuLink to="/projects/">Projects</MenuLink>,
          ///spread array so that useTransition has individual elements to wrap
          ...[
            ...data?.projects?.edges.map(({ node }) => (
              <SubMenuLink key={node.title} to={`/project/${node.slug.current}/`}>
                {node.title}
              </SubMenuLink>
            ))
          ],
          <MenuLink to="/blog/">Blog</MenuLink>,
          <MenuLink to="/contact/">Contact</MenuLink>
        ]
      : [],
    {
      ref: transitionApi,
      trail: 400 / 6,
      from: { transform: "translateX(-100%)", opacity: 0 },
      enter: { transform: "translateX(0)", opacity: 1 },
      leave: { transform: "translateX(-100%)", opacity: 0 },
      reset: () => !isOpen,
      config: config.slow
    }
  );

  useChain(isOpen ? [springApi, transitionApi] : [transitionApi, springApi], [
    0,
    isOpen ? 0.1 : 0.1
  ]);

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
          <Hamburger label={isOpen ? "Close menu" : "Open menu"} toggled={isOpen} />
        </ExteriorButton>
      </Portal>
      <StyledModal style={{ ...containerStyles }} isOpen={isOpen} onDismiss={close} aria-label="Site navigation">
        <ButtonBackground
          style={{
            "--width": isOpen ? "100%" : "",
            "--height": isOpen ? "100%" : ""
          }}
          onClick={close}
        >
          <VisuallyHidden>Close navigation menu</VisuallyHidden>
        </ButtonBackground>
        <MenuList>
          {linkTransition((style, item) => (
            <animated.div style={{ ...style }}>{item}</animated.div>
          ))}
        </MenuList>
      </StyledModal>
    </>
  );
};

const ExteriorButton = styled.button`
  position: fixed;
  top: 0;
  left: 0;

  background-color: var(--background-color);
  backdrop-filter: var(--blur);
  border: none;
  border-bottom-right-radius: 2px;
  z-index: 1;

  @media (min-width: 700px) {
    display: none;
  }
`;

const StyledModal = styled(animated(Dialog))`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: none;
  padding: 0;
  margin: 0;
`;

const ButtonBackground = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;

  background-color: hsl(183deg, 58%, 95%, 0.85);
  border: none;
`;

const MenuList = styled.nav`
  position: fixed;
  top: 15%;
  left: 0;
  width: fit-content;
  z-index: 1;
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
