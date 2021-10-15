import React from "react";
import TopHeader from "./headerTop";

import GlobalStyles from "../styles/globalStyles";
import SEO from "../components/seo";

const Layout = ({ headerPosition, children, seo }) => (
  <>
    <GlobalStyles />
    <SEO {...seo} />
    {headerPosition === "top" && <TopHeader />}
    <main>{children}</main>
  </>
);

export default Layout;
