import React from "react";
import styled from "styled-components";

import PreviewSpringLink from "./previewSpringLink";
import Title from "./typography/headingSecondary";
import Flex from "./flex";
import Body from "./typography/bodyRegular";

function PostPreview({ frontmatter, htmlAst }) {
  const {
    title,
    brief,
    hero,
    slug: { string: slug }
  } = frontmatter;
  console.log(title, brief, hero, slug);
  return (
    <PreviewSpringLink to={`/posts/${slug}`}>
      <ContentWrapper>
        <Title>{title}</Title>
        <Body>{brief}</Body>
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
  padding-top: var(--spacing-1);
`;

const ContentWrapper = styled.div`
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);
  padding-bottom: var(--spacing-4);
`;

export default PostPreview;
