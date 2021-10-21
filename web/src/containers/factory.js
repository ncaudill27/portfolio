import React from "react";
import Factory from "../components/factory";
import { slugify } from "../lib/string-utils";

function FactoryContainer({ blocks }) {
  const allChildrenAreTextNodes = (children = []) => {
    return children.every(child => child.type === "text");
  };

  const handleProperties = ({ properties, tagName, children }) => {
    let props = {};

    if (properties && Object.values(properties).length > 0) {
      for (const property in properties) {
        props[property] = properties[property];
      }
    }

    // conditionally add header value as is for table of contents
    if (tagName?.slice(0, 1) === "h") {
      let id = slugify(children[0].value);
      props = { id, as: tagName };
    }

    return props;
  };

  const handleText = node => {
    if (node.type === "text") {
      if (node.value !== "\n") {
        return node.value;
      }
    }
  };

  return (
    <>
      {
        
      }
    </>
  );
}

export default FactoryContainer;
