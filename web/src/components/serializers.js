import { Figure } from "./serializers/figure";
import { Normal } from "./serializers/normal";
import { Strong } from "./serializers/strong";
import { Hyperlink } from "./serializers/hyperlink";

const serializers = {
  types: {
    figure: Figure,
    block: Normal
  },
  marks: {
    strong: Strong,
    link: Hyperlink
  }
};

export default serializers;
