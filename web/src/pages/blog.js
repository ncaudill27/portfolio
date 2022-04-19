import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { isFuture, parseISO } from "date-fns";
import { mapEdgesToNodes } from "../lib/helpers";

import Layout from "../containers/layout";
import MaxWidthWrapper from "../components/maxWidthWrapper";
import Flex from "../components/flex";
import PostPreview from "../components/postPreview";

const BlogPage = ({ data, location }) => {
  const postNodes = mapEdgesToNodes(data?.posts).filter(
    ({ frontmatter }) => !isFuture(parseISO(frontmatter.date.start))
  );

  return (
    <Layout currentPath={location.path} seo={{ title: "Blog" }}>
      <ListWrapper width={700}>
        <Flex gap={4} stack>
          {postNodes.map(node => (
            <PostPreview key={node.id} {...node} />
          ))}
        </Flex>
      </ListWrapper>
    </Layout>
  );
};

const ListWrapper = styled(MaxWidthWrapper)`
  margin-top: var(--responsive-top-spacing-0);
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
