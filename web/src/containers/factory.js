import React from "react";
import Factory from "../components/factory";
import { slugify } from "../lib/string-utils";

function FactoryContainer({ blocks }) {
  const allChildrenAreTextNodes = ({ children = [] }) => {
    return children.every(child => child.type === "text");
  };

  const exposeAllTextNodes = (children = []) => {
    return children.map(node => {
      if (node.type === "text") {
        if (node.value !== "\n") {
          return node.value;
        }
      } else {
        return node;
      }
    });
  };

  const handleProperties = (properties = {}) => {
    let props = {};

    if (properties && Object.values(properties).length > 0) {
      for (const property in properties) {
        props[property] = properties[property];
      }
    }

    return props;
  };

  return (
    <>
      {blocks.map(node => {
        if (node.type === "text") return;

        let children;
        let properties;

        console.log(node);

        properties = handleProperties(node.properties);
        if (node.tagName?.slice(0, 1) === "h") {
          let id = slugify(node.children[0].value);
          properties = { id, as: node.tagName };
        }

        if (allChildrenAreTextNodes(node)) {
          children = exposeAllTextNodes(node.children);
          const factoryObj = {
            tagName: node.tagName,
            spreadable: {
              ...properties,
              children
            },
            type: node.type === "text" ? node.type : null
          };

          return <Factory {...factoryObj} />;
        } else {
          return <FactoryContainer blocks={node.children} />;
        }
      })}
    </>
  );
}

export default FactoryContainer;
