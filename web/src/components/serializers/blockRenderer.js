import React from "react";
import styled from "styled-components";

import PrimaryHeading from "../typography/headingPrimary";
import SecondaryHeading from "../typography/headingSecondary";
import Body from "../typography/bodyRegular";

export function BlockRenderer(props) {
  const { style } = props.node;

  switch (style) {
    case "h1":
      console.log(props);
      return <PrimaryHeading as="h2" {...props} />;
    default:
      return <Body>{props.children}</Body>;
  }
}
