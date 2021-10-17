import React from "react";

import PrimaryHeading from "../components/typography/headingPrimary";
import SecondaryHeading from "../components/typography/headingSecondary";
import TertiaryHeading from "../components/typography/headingTertiary";
import Body from "../components/typography/bodyRegular";

const Factory = props => {
  if (props.type === 'text') {
    if (props.value !== "\n") {
      return props.value
    }
  }
  console.log(props);

  switch (props.tagName) {
    case "h2":
      return <PrimaryHeading {...props} />;
    case "h3":
      return <SecondaryHeading {...props} />;
    case "h4":
      return <TertiaryHeading {...props} />;
    case "p":
      return <Body {...props} />;

    default:
      return <div>Dead end</div>;
  }
};

export default Factory