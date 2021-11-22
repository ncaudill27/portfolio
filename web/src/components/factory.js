import React from "react";
import useNotionElement from "../hooks/useNotionElement";

import PrimaryHeading from "./typography/headingPrimary";
import SecondaryHeading from "./typography/headingSecondary";
import TertiaryHeading from "./typography/headingTertiary";
import Body from "./typography/bodyRegular";
import Strong from "./typography/strong";
import Link from "./typography/hyperlink";
import Code from "./typography/code";
import CodeBlock from "./codeBlock";
import Aside from "./asideBlock";

const Factory = ({ blocks }) => {
  const element = useNotionElement(blocks);
  const { value, children, tagName } = element;

  // Delete properties that shouldn't be spread into element as attributes
  delete element.tagName;
  delete element.type;
  delete element.value;

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
      return <Code {...element} />;
    case "div":
      return <div {...element} />;
    case "text":
      return <>{value}</>;
    case "codeblock":
      return <CodeBlock {...element} />;
    case "aside":
      return <Aside {...element} />;

    case "root":
      return <>{children}</>;

    default:
      return <>Try again</>;
  }
};

export default Factory;
