import React from "react";
import { slugify } from "./string-utils";

import PrimaryHeading from "../components/typography/headingPrimary";
import SecondaryHeading from "../components/typography/headingSecondary";
import TertiaryHeading from "../components/typography/headingTertiary";
import Body from "../components/typography/bodyRegular";

export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map(edge => edge.node);
}

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id }
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export function blockBuilder(obj) {
  let blocks = []
  // console.log("Type: ", obj.type);
  // console.log("Element: ", obj.tagName);
  // console.log("Properties: ", obj.properties);

  if (obj.children) {
    blocks = obj.children.map(node => {
      if (node.type === "text") {
        return
      }

      let properties = {};
      if (node.properties && Object.values(node.properties).length > 0) {
        for (const property in node.properties) {
          properties[property] = node.properties[property];
        }
      }

      const { ElementTag, elementProps } = Factory(node, properties);
      if (!!ElementTag && !!elementProps) {
        if (node.children[0] && node.children[0].type === "text") {
          return React.createElement(ElementTag, elementProps, node.children.map(node => node.value).join(" "))
        } else {
          return React.createElement(ElementTag, elementProps, node.children);
        }
      }
    });
  }

  return blocks.filter(Boolean)
}

function Factory(node, props) {
  let children = []

  if (node.type === "text") {
    console.log("Hit nested text");
    return
  }

  if (node.children) {
    node.children.map(node => {
      if (node.type === "text") {
        if (node.value !== "\n") console.log(node.value);
        return
      }
      let properties = {};
      if (node.properties && Object.values(node.properties).length > 0) {
        for (const property in node.properties) {
          properties[property] = node.properties[property];
        }
      }

      const { ElementTag, elementProps } = Factory(node, properties);
      const reactEl = React.createElement(ElementTag, elementProps, node.children);
      console.log(reactEl);
      return reactEl;
    })
  }
  
  if (node.tagName.slice(0, 1) === "h") {
    let id = slugify(node.children[0].value);
    props = { ...props, id };
  }
  switch (node.tagName) {
    case "h2":
      return {
        ElementTag: PrimaryHeading,
        elementProps: {
          ...props,
          as: "h2"
        }
      };
    case "h3":
      return {
        ElementTag: SecondaryHeading,
        elementProps: {
          ...props,
          as: "h3"
        }
      };
    case "h4":
      return {
        ElementTag: TertiaryHeading,
        elementProps: {
          ...props,
          as: "h4"
        }
      };
    case "p":
      return {
        ElementTag: Body,
        elementProps: {
          ...props
        }
      };
    case "div":
      return {
        ElementTag: "div",
        elementProps: {
          ...props
        }
      };

    default:
      return {
        ElementTag: null,
        elementProps: null
      };
  }
}
