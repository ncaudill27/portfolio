import React from "react";

import PrimaryHeading from "../components/typography/headingPrimary";
import SecondaryHeading from "../components/typography/headingSecondary";
import TertiaryHeading from "../components/typography/headingTertiary";
import Body from "../components/typography/bodyRegular";
import Strong from "../components/typography/strong";
import FactoryContainer from "../containers/factory";

const Factory = ({ type, value, children, properties, tagName, handleProperties }) => {
  if (type === "text") {
    tagName = "text";
  } else if (type === "root") {
    tagName = "root";
  }

  if (type !== "text") {
    properties = handleProperties(properties, tagName, children);
    children = children.map(child => <FactoryContainer blocks={child} />);
  }

  const spreadable = {
    children,
    ...properties
  };

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
      return <Body as="li" {...spreadable} />;
    case "em":
      return <em {...spreadable} />;
    case "u":
      return <span style={{ textDecoration: "underline" }} {...spreadable} />;
    case "strong":
      return <Strong {...spreadable} />;
    case "code":
      return <code {...spreadable} />;
    case "div":
      return <div {...spreadable} />;
    case "text":
      return <>{value}</>;

    case "root":
      return <>{children}</>;

    default:
      return <>Try again</>;
  }
};

export default Factory;
