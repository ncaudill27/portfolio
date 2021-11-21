import React, { useState, useEffect } from "react";
import { slugify } from "../lib/string-utils";
import Factory from "../components/factory";

const useNotionElement = blocks => {
  
  const [element, setElement] = useState({});

  useEffect(() => {
    let properties, tagName, children;

    properties = handleProperties(blocks);
    tagName = getTag(blocks);

    if (blocks.type !== "text") {
      children = generateChildren(blocks);
    }

    setElement({
      ...blocks,
      ...properties,
      tagName,
      children
    });
  }, []);

  const handleProperties = ({ properties = {}, tagName = "", children }) => {
    let props = {};

    if (properties && Object.values(properties).length > 0) {
      for (const property in properties) {
        props[property] = properties[property];
      }
    }

    // conditionally add header value as is for table of contents
    if (tagName.slice(0, 1) === "h") {
      let id = children.length > 0 ? slugify(children[0].value) : null;
      props = { id, as: tagName };
    }

    return props;
  };

  const getTag = ({ type, tagName }) => {
    return !!tagName ? tagName : type;
  };

  const generateChildren = ({ children }) => {
    return children.map((child, idx) => <Factory key={idx} blocks={child} />);
  };

  return element;
};

export default useNotionElement;
