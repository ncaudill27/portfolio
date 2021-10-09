import React, { useState } from "react";
import Layout from "../components/layout";

function LayoutContainer(props) {
  const [headerPosition, setHeaderPosition] = useState("top");

  React.useEffect(() => {
    if (typeof window !== undefined) {
      const currentPath = window.location.href;
      const regex = new RegExp(/\/project\/*/); //TODO fix regex, missing "." before "*"
      const isProject = regex.test(currentPath);

      setHeaderPosition(isProject ? "side" : "top");
    }
  }, [headerPosition]);

  console.log(headerPosition);

  return <Layout {...props} headerPosition={headerPosition} />;
}

export default LayoutContainer;
