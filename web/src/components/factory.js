import React from "react";

import PrimaryHeading from "../components/typography/headingPrimary";
import SecondaryHeading from "../components/typography/headingSecondary";
import TertiaryHeading from "../components/typography/headingTertiary";
import Body from "../components/typography/bodyRegular";
import Strong from "../components/typography/strong";
import Link from "../components/typography/hyperlink";

const Factory = props => {
  const { value, children, tagName } = props;

  switch (tagName) {
    case "h2":
      return <PrimaryHeading {...props} />;
    case "h3":
      return <SecondaryHeading {...props} />;
    case "h4":
      return <TertiaryHeading {...props} />;
    case "p":
      return <Body {...props} />;
    case "ul":
      return <ul {...props} />;
    case "li":
      return <Body as="li" {...props} />;
    case "a":
      return <Link {...props} />;
    case "em":
      return <em {...props} />;
    case "u":
      return <span style={{ textDecoration: "underline" }} {...props} />;
    case "strong":
      return <Strong {...props} />;
    case "code":
      return <code {...props} />;
    case "div":
      return <div {...props} />;
    case "text":
      return <>{value}</>;

    case "root":
      return <>{children}</>;

    default:
      return <>Try again</>;
  }
};

export default Factory;
