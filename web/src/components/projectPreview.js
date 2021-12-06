import React from "react";
import styled from "styled-components";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import PreviewSpringLink from "./previewSpringLink";
import BlockContent from "./blockContent";
import Heading from "./typography/headingSecondary";
import Flex from "./flex";
import TechStack from "./projectStack";

function ProjectPreview(props) {
  return (
    <PreviewSpringLink to={`/projects/${props.slug.current}`}>
      <ImageWrapper>
        <img
          src={imageUrlFor(buildImageObj(props.mainImage))
            .width(600)
            .height(Math.floor((9 / 16) * 600))
            .url()}
          alt={props.mainImage.alt}
          style={{ width: "100%", height: "100%" }}
        />
      </ImageWrapper>
      <ContentWrapper>
          <StackWrapper gap={1}>
            <TechStack list={props.stack} iconOnly />
          </StackWrapper>
        <Flex gap={1}>
          <div>
            <Title>{props.title}</Title>
            <BlockContent blocks={props._rawExcerpt} />
          </div>
        </Flex>
      </ContentWrapper>
    </PreviewSpringLink>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 66.666%;
  background: #eee;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    object-fit: cover;
  }
`;

const StackWrapper = styled(Flex)`
  margin-top: var(--spacing-1);
`;

const ContentWrapper = styled.div`
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);
  padding-bottom: var(--spacing-4);
`;

const Title = styled(Heading)`
  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-0);
`;

export default ProjectPreview;
