import React from "react";
import styled from "styled-components";
import { useTrail, animated, config } from "react-spring";

const Trail = ({ children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: config.stiff
  });

  return (
    <RootWrapper>
      {trail.map((style, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </RootWrapper>
  )
};
const RootWrapper = styled.div`
  position: fixed;
  top: 15%;
  left: 0;
  width: fit-content;
  z-index: 1;
`;

export default Trail