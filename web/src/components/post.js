import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

import Title from "./typography/headingPrimary";
import BodySmall from "./typography/bodySmall";

import TripleColumnLayout from "./layoutTripleColumn";
import MaxWidthWrapper from "./maxWidthWrapper";
import Header from "./headerSide";
import Hamburger from "./headerHamburger";
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
  htmlAst: notionData
}) => {
  return (
    <TripleColumnLayout>
      <Header />
      <Hamburger />
      <article>
        <ImageWrapper>
          <img src={hero[0].file.url} />
        </ImageWrapper>
        <CopyWrapper width={690}>
          <Title>{title}</Title>
          <Factory blocks={notionData} />
        </CopyWrapper>
      </article>
      <Aside>
        <BodySmall>{format(date, "MMMM D, YYYY")}</BodySmall>
        <PostTagList list={tags} />
      </Aside>
    </TripleColumnLayout>
  );
};

const ImageWrapper = styled.div`
  width: 100%;
  
  & > img {
    width: 100%;
    max-height: 350px;
    object-fit: cover;

  }

  @media (min-width: 915px) {
    display: none;
  }
`;

export const CopyWrapper = styled(MaxWidthWrapper)`
  margin-top: var(--spacing-2);
  // lead paragraph
  & > p:nth-child(2) {
    font-size: ${22 / 16}rem;
    font-weight: var(--font-weight-medium);
  }

  @media (max-width: 689px) {
    padding-left: var(--spacing-1);
    padding-right: var(--spacing-1);
  }
`;

export default Post;
