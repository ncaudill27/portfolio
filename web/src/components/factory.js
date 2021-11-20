import React from "react";
import useNotionElement from "../hooks/useNotionElement";

import PrimaryHeading from "../components/typography/headingPrimary";
import SecondaryHeading from "../components/typography/headingSecondary";
import TertiaryHeading from "../components/typography/headingTertiary";
import Body from "../components/typography/bodyRegular";
import Strong from "../components/typography/strong";
import Link from "../components/typography/hyperlink";

const Factory = ({ blocks }) => {
  const element = useNotionElement(blocks);
  const { value, children, tagName } = element;
  if (Object.keys(element).length === 0) return "";
  delete element.tagName;
  delete element.type;

  switch (tagName) {
    case "h2":
      return <PrimaryHeading {...element} />;
    case "h3":
      return <SecondaryHeading {...element} />;
    case "h4":
      return <TertiaryHeading {...element} />;
    case "p":
      return <Body {...element} />;
    case "ul":
      return <ul {...element} />;
    case "li":
      return <Body as="li" {...element} />;
    case "a":
      return <Link {...element} />;
    case "em":
      return <em {...element} />;
    case "u":
      return <span style={{ textDecoration: "underline" }} {...element} />;
    case "strong":
      return <Strong {...element} />;
    case "code":
      return <code {...element} />;
    case "div":
      return <div {...element} />;
    case "text":
      return <>{value}</>;

    case "root":
      return <>{children}</>;

    default:
      return <>Try again</>;
  }
};

export default Factory;
