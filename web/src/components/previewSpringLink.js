import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

function PreviewSpringLink({ to, children }) {
  const [isHover, setIsHover] = React.useState(false);
  const hover = () => setIsHover(true);
  const unHover = () => setIsHover(false);

  const styles = useSpring({
    transform: isHover ? `scale(1.015)` : `scale(1)`,
    backgroundColor: isHover ? "var(--color-text-transparent)" : "var(--color-background)",
    config: {
      tension: 150,
      friction: 10
    }
  });

  return (
    <StyledLink to={to} onMouseEnter={hover} onMouseLeave={unHover}>
      <animated.div style={styles}>{children}</animated.div>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default PreviewSpringLink;
