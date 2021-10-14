import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { isFuture } from "date-fns";
import { mapEdgesToNodes } from "../lib/helpers";

import Layout from "../containers/layout";
import Heading from "../components/typography/headingPrimary";
import Body from "../components/typography/bodyRegular";

const BlogPage = ({ data, errors }) => {
  console.log(data.posts);
  const postNodes = mapEdgesToNodes(data?.posts).filter(({ frontmatter }) =>
    console.log(frontmatter)
  );

  return (
    <Layout title="Blog">
      <Wrapper>
        <MainHeader>COMING SOON</MainHeader>
        <Body>I'm just as excited as you are about putting content back out! Check back soon!</Body>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  margin-top: var(--responsive-margin-top);

  text-align: center;
`;

const MainHeader = styled(Heading)`
  width: fit-content;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 333px) {
    width: 100%;
  }
`;

export const query = graphql`
  query BlogPageQuery {
    posts: allMarkdownRemark(filter: { frontmatter: { Active: { eq: true } } }) {
      edges {
        node {
          ...NotionPost
        }
      }
    }
  }
`;

export default BlogPage;
