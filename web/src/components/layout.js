import React from "react";
import Header from "./headerTop";
import GlobalStyles from "../styles/globalStyles";

const Layout = ({ children, aside }) => (
  <>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <aside>{aside}</aside>
  </>
);

export default Layout;
