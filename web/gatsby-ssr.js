import React from "react";
import GlobalStyles from "./src/styles/globalStyles";

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
);
