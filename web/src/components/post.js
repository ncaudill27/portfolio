import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Title from "./typography/headingPrimary";
import BodySmall from "./typography/bodySmall";

import TripleColumnLayout from "./layoutTripleColumn";
import Header from "./headerSide";
import Hamburger from "./headerHamburger";
import Flex from "./flex";
import PostTagList from "./postTagList";
import Factory from "../containers/factory";
import Aside from "./aside";

const Post = ({
  frontmatter: {
    title,
    hero,
    date: { start: date },
    tags
  },
  htmlAst
}) => {
  console.log(htmlAst);
  return (
    <TripleColumnLayout>
      <Header />
      <Hamburger />
      <main>
        <HeadingWrapper justify="space-between" align="baseline"></HeadingWrapper>
        <Title>{title}</Title>
        <img src={hero[0].file.url} />
        <Factory blocks={htmlAst} />
      </main>
      <Aside>
        <BodySmall>{format(date, "MMMM d, YYYY")}</BodySmall>
        <PostTagList list={tags} />
      </Aside>
    </TripleColumnLayout>
  );
};

const PostLayout = styled(TripleColumnLayout)`
  
`;

const HeadingWrapper = styled(Flex)`
  padding-bottom: var(--responsive-top-spacing-2);
`;

export default Post;
