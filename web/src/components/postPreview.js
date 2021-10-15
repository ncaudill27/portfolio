import React from "react";
import styled from "styled-components";

import PreviewSpringLink from "./previewSpringLink";
import Title from "./typography/headingSecondary";
import Flex from "./flex";

function PostPreview(props) {
  console.log(props);
  return (
    <PreviewSpringLink to={`/posts/${props.slug}`}>
      <ContentWrapper>
        <Title></Title>
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
