import React from "react";
import lottie from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

defineLordIconElement(lottie.loadAnimation);

const LordIcon = () => (
  <lord-icon
    src="https://cdn.lordicon.com/jvucoldz.json"
    trigger="hover"
    colors="primary:#252525,secondary:#42f6ff"
    scale="61"
    style={{width: 500, height: 500}}
  />
);

export default LordIcon;
