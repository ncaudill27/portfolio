import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { isFuture } from "date-fns";
import { mapEdgesToNodes } from "../lib/helpers";

import Layout from "../containers/layout";
import Heading from "../components/typography/headingPrimary";
import PostPreviewGrid from "../components/postPreviewGrid";

const BlogPage = ({ data, errors }) => {
  console.log(data.posts);
  const postNodes = mapEdgesToNodes(data?.posts).filter(
    ({ frontmatter }) => !isFuture(frontmatter.date.start)
  );

  console.log(postNodes);

  return (
    <Layout title="Blog">
      <PostPreviewGrid nodes={postNodes} />
    </Layout>
  );
};

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
