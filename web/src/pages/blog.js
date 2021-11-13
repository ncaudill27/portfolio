import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { isFuture } from "date-fns";
import { mapEdgesToNodes } from "../lib/helpers";

import Layout from "../containers/layout";
import Heading from "../components/typography/headingPrimary";
import PostPreviewGrid from "../components/postPreviewGrid";
import MaxWidthWrapper from "../components/maxWidthWrapper";
import Flex from "../components/flex";
import PostPreview from "../components/postPreview";

const BlogPage = ({ data, errors }) => {
  const postNodes = mapEdgesToNodes(data?.posts).filter(
    ({ frontmatter }) => !isFuture(frontmatter.date.start)
  );

  return (
    <Layout seo={{ title: "Blog" }}>
      <MaxWidthWrapper width={800}>
        <Flex gap={3} stack>
          {postNodes.map(node => (
            <PostPreview key={node.id} {...node} />
          ))}
        </Flex>
      </MaxWidthWrapper>
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
