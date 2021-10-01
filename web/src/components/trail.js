import React from "react";
import { useTrail, animated } from "react-spring";

const Trail = ({ children, config }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, config);

  return (
    <>
      {trail.map((style, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </>
  );
};

export default Trail;
