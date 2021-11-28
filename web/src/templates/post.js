import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import MaxWidthWrapper from "../components/maxWidthWrapper";
import Layout from "../containers/layout";
import Post from "../components/post";

export const query = graphql`
  query PostTemplateQuery($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      ...NotionPost
    }
  }
`;

const PostTemplate = ({ data: { post }, errors }) => {
  const image = post.frontmatter.hero[0].file.url;

  return (
    <Layout
      seo={{
        title: post.frontmatter.title
      }}
    >
      <ImageWrapper>
        <img src={image} />
      </ImageWrapper>
      <Post {...post} />
    </Layout>
  );
};

const ImageWrapper = styled.div`
  width: 100%;

  & > img {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    object-fit: cover;
  }

  @media (max-width: 915px) {
    display: none;
  }
`;

export default PostTemplate;
