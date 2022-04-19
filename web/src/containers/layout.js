import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";

function LayoutContainer(props) {
  const currentPath = props.currentPath;

  const projectsRegex = new RegExp(/\/projects\/[a-z0-9]+(-[a-z0-9]+)*/);
  const postsRegex = new RegExp(/\/posts\/[a-z0-9]+(-[a-z0-9]+)*/);
  const isProject = projectsRegex.test(currentPath);
  const isPost = postsRegex.test(currentPath);

  const headerPosition = isProject || isPost ? "side" : "top";

  return <Layout headerPosition={headerPosition} {...props} />;
}

LayoutContainer.propTypes = {
  seo: PropTypes.shape({
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired
  }).isRequired,
  currentPath: PropTypes.string.isRequired
};

export default LayoutContainer;
