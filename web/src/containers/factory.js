import React from "react";
import Factory from "../components/factory";
import { slugify } from "../lib/string-utils";

function FactoryContainer({ blocks }) {
  const handleProperties = (properties, tagName, children) => {
    let props = {};

    if (properties && Object.values(properties).length > 0) {
      for (const property in properties) {
        props[property] = properties[property];
      }
    }

    // conditionally add header value as is for table of contents
    if (tagName?.slice(0, 1) === "h") {
      console.log("Header", children);
      let id = children.length > 0 ? slugify(children[0].value) : null;
      props = { id, as: tagName };
    }

    console.log("header props", props);
    return props;
  };

  return <Factory {...blocks} handleProperties={handleProperties} />;
}

export default FactoryContainer;
