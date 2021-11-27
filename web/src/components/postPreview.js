import React from "react";
import styled from "styled-components";

import PreviewSpringLink from "./previewSpringLink";
import Heading from "./typography/headingSecondary";
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

  return (
    <PreviewSpringLink to={`/posts/${slug}`}>
      <RootWrapper>
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

const Title = styled(Heading)`
  margin-bottom: var(--spacing-1);
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
