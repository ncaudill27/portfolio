import { Figure } from "./serializers/figure";
import { BlockRenderer } from "./serializers/blockRenderer";
import { Strong } from "./serializers/strong";
import { Hyperlink } from "./serializers/hyperlink";

const serializers = {
  types: {
    figure: Figure,
    block: BlockRenderer
  },
  marks: {
    strong: Strong,
    link: Hyperlink
  }
};

export default serializers;
