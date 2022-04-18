import BaseBlockContent from "@sanity/block-content-to-react";
import React from "react";
import clientConfig from "../../client-config";
import { Figure, BlockRenderer, Strong, Hyperlink, ListItem } from "./serializers";

const serializers = {
  types: {
    figure: Figure,
    block: BlockRenderer
  },
  marks: {
    strong: Strong,
    link: Hyperlink
  },
  listItem: ListItem
};

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
);

export default BlockContent;
