import { Figure } from "./serializers/figure";
import { BlockRenderer } from "./serializers/blockRenderer";
import { Strong } from "./serializers/strong";
import { Hyperlink } from "./serializers/hyperlink";
import { ListItem } from "./serializers/listItem";

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

export default serializers;
