import React from "react";
import styled from "styled-components";

import PreviewSpringLink from "./previewSpringLink";
import Heading from "./typography/headingSecondary";
import Body from "./typography/bodyRegular";
import PostTagList from "./postTagList";

function PostPreview({ frontmatter }) {
  const {
    title,
    brief,
    tags,
    slug: { string: slug }
  } = frontmatter;

  return (
    <PreviewSpringLink to={`/posts/${slug}`}>
      <Title noMargin>{title}</Title>
      <PostTagList list={tags} />
      <Brief>{brief}</Brief>
    </PreviewSpringLink>
  );
}

const Title = styled(Heading)`
  margin-bottom: var(--spacing-1);
`;

const Brief = styled(Body)`
  margin-top: var(--spacing-0);
`;

export default PostPreview;
