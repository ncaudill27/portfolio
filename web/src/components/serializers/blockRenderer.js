import React from "react";

import PrimaryHeading from "../typography/headingPrimary";
import SecondaryHeading from "../typography/headingSecondary";
import TertiaryHeading from "../typography/headingTertiary";
import Body from "../typography/bodyRegular";

export function BlockRenderer(props) {
  const { style } = props.node;

  switch (style) {
    case "h1":
      return <PrimaryHeading as="h2" {...props} />;
    case "h2":
      return <SecondaryHeading as="h3" {...props} />;
    case "h3":
      return <TertiaryHeading as="h4" {...props} />;

    default:
      return <Body {...props} />;
  }
}
