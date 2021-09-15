import React from "react";
import Header from "./header";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div>{children}</div>
    <footer>
      © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </>
);

export default Layout;
