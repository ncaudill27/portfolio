import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Title from "./typography/headingPrimary";
import BodySmall from "./typography/bodySmall";

import MaxWidthWrapper from "./maxWidthWrapper";
import Flex from "./flex";
import PostTagList from "./postTagList";
import BlockRenderer from "./blockNotion";

const Post = ({
  frontmatter: {
    title,
    hero,
    date: { start: date },
    tags
  },
  htmlAst
}) => {
  return (
    <RootWrapper width={65} unit="ch">
      <HeadingWrapper justify="space-between" align="baseline">
        <PostTagList list={tags} />
        <BodySmall>{format(date, 'MMMM d, YYYY')}</BodySmall>
      </HeadingWrapper>
      <Title>{title}</Title>
      <img src={hero[0].file.url} />
      <BlockRenderer blocks={htmlAst} />
    </RootWrapper>
  );
};

const RootWrapper = styled(MaxWidthWrapper)`
  margin-top: calc(var(--responsive-margin-top) / 2);
`;

const HeadingWrapper = styled(Flex)`
  padding-bottom: calc(var(--responsive-margin-top) / 2);
`;

export default Post;
