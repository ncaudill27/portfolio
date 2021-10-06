import React, { useState } from "react";
import Layout from "../components/layout";

function LayoutContainer(props) {
  const [currentPath, setCurrentPath] = useState('');
  const [headerPosition, setHeaderPosition] = useState('top');

  React.useEffect(() => {
    if (typeof window !== undefined) {
      setCurrentPath((window.location.href))
    }
  }, [currentPath]);

  const regex = new RegExp('/project/*');
  const isProject = regex.test(currentPath)


  console.log(currentPath);

  return <Layout {...props} />;
}

export default LayoutContainer;
