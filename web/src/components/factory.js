import React from "react";

import PrimaryHeading from "../components/typography/headingPrimary";
import SecondaryHeading from "../components/typography/headingSecondary";
import TertiaryHeading from "../components/typography/headingTertiary";
import Body from "../components/typography/bodyRegular";
import Strong from "../components/typography/strong";

const Factory = ({ tagName, spreadable, value }) => {
  switch (tagName) {
    case "h2":
      return <PrimaryHeading {...spreadable} />;
    case "h3":
      return <SecondaryHeading {...spreadable} />;
    case "h4":
      return <TertiaryHeading {...spreadable} />;
    case "p":
      return <Body {...spreadable} />;
    case "ul":
      return <ul {...spreadable} />;
    case "li":
      return <li {...spreadable} />;
    case "em":
      return <em {...spreadable} />;
    case "strong":
      return <Strong {...spreadable} />;
    case "code":
      return <code {...spreadable} />;
    case "div":
      return <div {...spreadable} />;

    default:
      return <div>Try again</div>;
  }
};

export default Factory;
