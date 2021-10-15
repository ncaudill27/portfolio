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
  return (
    <Layout>
      <MaxWidthWrapper width={2000}>
        <Post {...post} />
      </MaxWidthWrapper>
    </Layout>
  );
};

const ImageWrapper = styled.div`
  width: 100%;

  & > img {
    min-width: 900px;
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export default PostTemplate;
