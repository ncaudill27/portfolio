import React from "react";
import styled from "styled-components";

import PreviewSpringLink from "./previewSpringLink";
import Title from "./typography/headingSecondary";
import Body from "./typography/bodyRegular";
import ProjectTagList from "./projectTagList";

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
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <ProjectTagList list={tags} />
        <Brief>{brief}</Brief>
      </ContentWrapper>
    </PreviewSpringLink>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 66.666%;
  background: #eee;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  width: 722px;
  height: 477px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);
  padding-bottom: var(--spacing-4);
`;

const Brief = styled(Body)`
  padding-top: var(--spacing-0);
`;

export default PostPreview;
