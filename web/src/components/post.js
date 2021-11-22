import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Title from "./typography/headingPrimary";
import BodySmall from "./typography/bodySmall";

import TripleColumnLayout from "./layoutTripleColumn";
import MaxWidthWrapper from "./maxWidthWrapper";
import Header from "./headerSide";
import Hamburger from "./headerHamburger";
import Flex from "./flex";
import PostTagList from "./postTagList";
import Factory from "../components/factory";
import Aside from "./asideColumn";

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
    <TripleColumnLayout>
      <Header />
      <Hamburger />
      <article>
        <CopyWrapper width={690}>
          <Title>{title}</Title>
          <img src={hero[0].file.url} />
          <Factory blocks={htmlAst} />
        </CopyWrapper>
      </article>
      <Aside>
        <BodySmall>{format(date, "MMMM d, YYYY")}</BodySmall>
        <PostTagList list={tags} />
      </Aside>
    </TripleColumnLayout>
  );
};

const PostLayout = styled(TripleColumnLayout)``;

const HeadingWrapper = styled(Flex)`
  padding-bottom: var(--responsive-top-spacing-2);
`;

export const CopyWrapper = styled(MaxWidthWrapper)`
  padding-top: var(--responsive-top-spacing-2);
  // lead paragraph
  & > p:nth-child(3) {
    font-size: ${22 / 16}rem;
    font-weight: var(--font-weight-medium);
  }

  @media (max-width: 689px) {
    padding-left: var(--spacing-1);
    padding-right: var(--spacing-1);
  }
`;

export default Post;
