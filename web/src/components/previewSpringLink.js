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
    <RootWrapper as={Link} to={to} onMouseEnter={hover} onMouseLeave={unHover}>
      <ContentWrapper style={styles}>{children}</ContentWrapper>
    </RootWrapper>
  );
}

const RootWrapper = styled.div`
  text-decoration: none;
  color: inherit;
`;

const ContentWrapper = styled(animated.div)`
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: 2px;
`;

export default PreviewSpringLink;
