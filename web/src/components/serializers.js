import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

import PrimaryHeading from "./typography/headingPrimary";
import SecondaryHeading from "./typography/headingSecondary";
import TertiaryHeading from "./typography/headingTertiary";
import Body from "./typography/bodyRegular";
import Link from "./typography/hyperlink";

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

export function Figure({ node }) {
  if (!node.asset) return null;

  const imageData = getGatsbyImageData(node.asset, { maxWidth: 675 }, clientConfig.sanity);

  return (
    <StyledFigure>
      <GatsbyImage image={imageData} alt={node.alt} />
    </StyledFigure>
  );
}

const StyledFigure = styled.figure`
  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-1);

  @media (max-width: 915px) {
    position: relative;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
  }
`;

export function Hyperlink(props) {
  return <Link href={props.mark.href} {...props} />;
}

export function ListItem(props) {
  return <Body as="li" {...props} />;
}

export function Strong(props) {
  return <Str>{props.children}</Str>;
}
