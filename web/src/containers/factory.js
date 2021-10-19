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
      {blocks.map((node, nodeIndex) => {
        if (node.type === "element") {
          console.log(node);
          let children = node.children.map((child, childIndex) => {
            console.log("Child", child);
            if (child.type === "element") {
              return <FactoryContainer key={childIndex} blocks={child.children} />;
            } else {
              return <Factory tagName="text" value={child.value} />;
            }
          });

          let properties = handleProperties(node);

          let factoryObj = {
            tagName: node.type === "element" ? node.tagName : node.type,
            spreadable: {
              ...properties,
              children,
              key: nodeIndex
            }
          };

          return <Factory {...factoryObj} />;
        } else {
          return <Factory tagName="text" value={node.value} />;
        }
      })}
    </>
  );
}

export default FactoryContainer;
