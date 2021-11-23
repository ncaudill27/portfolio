import React, { useState, useEffect } from "react";
import { slugify } from "../lib/string-utils";
import Factory from "../components/factory";

const useNotionElement = blocks => {
  const [element, setElement] = useState({});

  useEffect(() => {
    let properties, tagName, children;

    tagName = getTag(blocks);

    if (blocks.type !== "text") {
      properties = handleProperties(blocks);
      children = generateChildren(blocks);
    }

    setElement({
      ...blocks,
      ...properties,
      tagName,
      children
    });
  }, []);

  return element;
};

// if text node returns type property as tagName for Factory component use
const getTag = ({ type, tagName }) => {
  return !!tagName ? tagName : type;
};

// will check if node has any existing properties or needs properties added
// if neither of these conditions apply return empty object
const handleProperties = ({ properties = {}, tagName = "", children }) => {
  let props = {};

  // grab any existing properties
  if (Object.values(properties).length > 0) {
    for (const property in properties) {
      props[property] = properties[property];
    }
  }

  if (isHeading(tagName)) props = handleHeading(tagName, children);

  return props;
};

// sends children into Factory component where the next depth of nodes will enter useNotionElement
const generateChildren = ({ children }) => {
  return children.map((child, idx) => <Factory key={idx} blocks={child} />);
};

const isHeading = tagName => tagName.slice(0, 1) === "h";

// adds id attribute for future table of contents use
// and as attribute for styled-components
const handleHeading = (tagName, children) => {
  let id = children.length > 0 ? slugify(children[0].value) : null;

  return {
    id,
    as: tagName
  };
};

export default useNotionElement;
