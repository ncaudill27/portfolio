import React, { useState } from "react";
import Layout from "../components/layout";

function LayoutContainer(props) {
  const [headerPosition, setHeaderPosition] = useState("top");

  React.useEffect(() => {
    if (typeof window !== undefined) {
      const currentPath = window.location.href;
      const regex = new RegExp(/\/projects\/[a-z0-9]+(-[a-z0-9]+)*/);
      const isProject = regex.test(currentPath);

      setHeaderPosition(isProject ? "side" : "top");
    }
  }, [headerPosition]);

  return <Layout {...props} headerPosition={headerPosition} />;
}

export default LayoutContainer;
