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
      <Flex>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
      <ContentWrapper>
        <Title noPadding>{title}</Title>
        <PostTagList list={tags} />
        <Brief>{brief}</Brief>
      </ContentWrapper>
      </Flex>
    </PreviewSpringLink>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  min-width: 300px;
  background: #eee;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  width: 422px;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
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
