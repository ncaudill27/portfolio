import React from "react";
import { slugify } from "../lib/string-utils";
import Factory from "../components/factory";

const useNotionElement = blocks => {
  let children;

  if (blocks.type !== "text") {
    children = generateChildren(blocks);
  }
    
  const tagName = getTag(blocks);
  const properties = handleProperties(blocks);

  return {
    ...blocks, // spread all existing block properties
    ...properties, // spread updated properties
    tagName, // overwrite existing blocks.tagName
    children // overwrite existing blocks.children
  };
};

// non-element node have no tagName
// getTag sets the type property as tagName for Factory component use
const getTag = ({ type, tagName }) => (!!tagName ? tagName : type);

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
const generateChildren = ({ children }) =>
  children.map((child, idx) => <Factory key={idx} blocks={child} />);

const isHeading = tagName => tagName.slice(0, 1) === "h";

// adds id attribute for future table of contents use
// and as attribute for styled-components
const handleHeading = (tagName, children) => {
  let id = children.length > 0 ? slugify(children[0].value) : null;

  return {
    id,
    // as: tagName
  };
};

export default useNotionElement;
