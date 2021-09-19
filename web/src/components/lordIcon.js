import React from "react";
import lottie from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

defineLordIconElement(lottie.loadAnimation);

const LordIcon = () => {
  const isDark = true; //TODO
  return (
    <lord-icon
      src="https://cdn.lordicon.com/jvucoldz.json"
      trigger="hover"
      colors={`primary:${isDark ? "#252525" : "#ebf9fa"},secondary:#0063db`}
      scale="61"
      style={{ width: 300, height: 300 }}
    />
  );
};

export default LordIcon;
