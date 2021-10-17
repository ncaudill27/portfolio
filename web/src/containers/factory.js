import React from "react";
import { slugify } from "./string-utils";

function Factory({ blocks }) {
  if (node.type === "text") {
    console.log("Hit nested text");
    return;
  }

  if (node.children) {
    let children
    let properties = {};

    node.children.map(node => {
      if (node.type === "text") {
        if (node.value !== "\n") {
          children = node.value;
        }
        return;
      }
      if (node.properties && Object.values(node.properties).length > 0) {
        for (const property in node.properties) {
          properties[property] = node.properties[property];
        }
      }

      const { ElementTag, elementProps } = Factory(node, properties);
      const reactEl = React.createElement(ElementTag, elementProps, node.children);
      console.log(reactEl);
      return reactEl;
    });
  }

  if (node.tagName.slice(0, 1) === "h") {
    let id = slugify(node.children[0].value);
    props = { ...props, id };
  }
  switch (node.tagName) {
    case "h2":
      return <PrimaryHeading as="h2" {...props} />;
    case "h3":
      return <SecondaryHeading as="h3" {...props} />;
    case "h4":
      return <TertiaryHeading as="h4" {...props} />;
    case "p":
      return <Body {...props} />

    default: 
      return <div>Dead end</div>

  }
}

export default Factory;