import React from "react";
import Header from "./headerTop";
import GlobalStyles from "../styles/globalStyles";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, aside }) => (
  <>
    <GlobalStyles />
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <main>{children}</main>
    <aside>{aside}</aside>
  </>
);

export default Layout;
