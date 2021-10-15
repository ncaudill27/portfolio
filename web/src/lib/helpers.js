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

export function blockBuilder(blocks) {
  // console.log("Type: ", blocks.type);
  // console.log("Element: ", obj.tagName);
  // console.log("Properties: ", obj.properties);

  if (blocks.children) {
    let properties = {};
    blocks.children.map(node => {
      if (node.type === "text") {
        console.log("\tWith text: " + node.value);
        return;
      }
      console.log("This will be a", node.tagName);

      if (node.tagName.slice(0, 1) === "h") {
        notionHeaderRenderer(node, properties);
      }

      if (node.properties && Object.values(node.properties).length > 0) {
        for (const property in node.properties) {
          properties[property] = node.properties[property];
        }
        console.log("With properties:", properties);
      }
      blockBuilder(node);
    });
  }
}

function notionHeaderRenderer(node, props) {
  let id = slugify(node.children[0].value);
  const { HeaderTag, headerProps } = headerSwitch(node, id);

  const reactEl = React.createElement(
    HeaderTag,
    headerProps,
    node.children[0].value
  );

  console.log("Header element: ", reactEl);
  return reactEl;
}

function headerSwitch({ tagName }, id) {
  switch (tagName) {
    case "h2":
      return {
        HeaderTag: PrimaryHeading,
        headerProps: {
          id,
          as: "h2"
        }
      };
    case "h3":
      return {
        HeaderTag: SecondaryHeading,
        headerProps: {
          id,
          as: "h3"
        }
      };
    case "h4":
      return {
        HeaderTag: TertiaryHeading,
        headerProps: {
          id,
          as: "h4"
        }
      };

    default:
      break;
  }
}
