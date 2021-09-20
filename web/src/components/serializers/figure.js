import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../../client-config";

export function Figure({ node }) {
  if (!node.asset) {
    return null;
  }

  const imageData = getGatsbyImageData(node.asset, { maxWidth: 675 }, clientConfig.sanity);

  return (
    <RootWrapper>
      <GatsbyImage image={imageData} alt={node.alt} />
    </RootWrapper>
  );
}

const RootWrapper = styled.figure`
  @media (max-width: 700px) {
    margin-left: calc(var(--spacing-1) * -1);
    margin-right: calc(var(--spacing-1) * -1);
  }
`;
