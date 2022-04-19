import React from "react";
import PropTypes from "prop-types";

import TopHeader from "./headerTop";

import GlobalStyles from "../styles/globalStyles";
import SEO from "../components/seo";

const Layout = ({ seo, headerPosition, children }) => (
  <>
    <GlobalStyles />
    <SEO {...seo} />
    {headerPosition === "top" && <TopHeader />}
    {children}
  </>
);

Layout.propTypes = {
  seo: PropTypes.shape({
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired
  }).isRequired,
  headerPosition: PropTypes.string.isRequired
};

export default Layout;
