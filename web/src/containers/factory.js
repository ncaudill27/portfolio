import React from "react";
import Factory from "../components/factory";

import useNotionElement from "../hooks/useNotionElement";

function FactoryContainer({ blocks }) {
  const element = useNotionElement(blocks);

  return <Factory {...element} />;
}

export default FactoryContainer;
