import React from "react";
import Factory from "../components/factory";
import { slugify } from "../lib/string-utils";

function FactoryContainer({ blocks }) {
  const allChildrenAreTextNodes = (children = []) => {
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

  const handleElement = blocks => {
    console.log("Block", blocks);
    return blocks.children.map((node, nodeIndex) => {
      if (node.type === "text") return "";
      console.log(node);
      let children = node.children.map((child, childIndex) => {
        return <FactoryContainer key={childIndex} blocks={child} />;
      });
      console.log(children);
      let properties = handleProperties(node);
      let factoryObj = {
        tagName: node.tagName,
        spreadable: {
          ...properties,
          children,
          key: nodeIndex
        }
      };
      let el = <Factory {...factoryObj} />;
      console.log("El", el);

      return <Factory {...factoryObj} />;
    });
  };

  const handleText = node => {
    if (node.value !== "\n") {
      return node.value;
    } else {
      return "";
    }
  };

  return <>{blocks.type === "text" ? handleText(blocks) : handleElement(blocks)}</>;
}

export default FactoryContainer;
