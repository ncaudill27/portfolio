import React from "react";
import styled from "styled-components";

import PreviewSpringLink from "./previewSpringLink";
import Title from "./typography/headingSecondary";
import Body from "./typography/bodyRegular";
import PostTagList from "./postTagList";
import Flex from "./flex";

function PostPreview({ frontmatter }) {
  const {
    title,
    brief,
    hero,
    tags,
    slug: { string: slug }
  } = frontmatter;

  const image = hero[0].file.url;

  return (
    <PreviewSpringLink to={`/posts/${slug}`}>
      <RootWrapper>
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
        <ContentWrapper>
          <Title noMargin>{title}</Title>
          <PostTagList list={tags} />
          <Brief>{brief}</Brief>
        </ContentWrapper>
      </RootWrapper>
    </PreviewSpringLink>
  );
}

const RootWrapper = styled(Flex)`
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 66.666%;
  background: #eee;
  overflow: hidden;

  @media (min-width: 640px) {
    padding-bottom: 0;
    width: 300px;
    min-width: 300px;
  }
`;

const Image = styled.img`
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;

  @media (max-width: 640px) {
    /* flex-direction: column; */
  }
`;

const ContentWrapper = styled.div`
  padding-top: var(--spacing-0);
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);
  padding-bottom: var(--spacing-4);
`;

const Brief = styled(Body)`
  padding-top: var(--spacing-0);
`;

export default PostPreview;
