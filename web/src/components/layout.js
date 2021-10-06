import React from "react";
import TopHeader from "./headerTop";

import GlobalStyles from "../styles/globalStyles";

const Layout = ({ headerPosition, children }) => (
  <>
    <GlobalStyles />
    {headerPosition === "top" && <TopHeader />}
    <main>{children}</main>
  </>
);

export default Layout;
