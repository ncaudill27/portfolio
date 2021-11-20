import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import SEO from "../components/seo";
import GraphQLErrorList from "../components/graphql-error-list";
import Project from "../components/project";
import MaxWidthWrapper from "../components/maxWidthWrapper";

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    sampleProject: sanitySampleProject(id: { eq: $id }) {
      ...SanityProject
    }
  }
`;

const ProjectTemplate = ({ data: { sampleProject: project }, errors }) => {
  return (
    <>
      <ImageWrapper>
        <img
          src={imageUrlFor(buildImageObj(project.mainImage))
            .width(1500)
            .height(300)
            .fit("crop")
            .url()}
          alt={project.mainImage.alt}
          style={{
            marginBottom: "var(--spacing-1)"
          }}
        />
      </ImageWrapper>
      <Project {...project} />
    </>
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

  @media (max-width: 914px) {
    display: none;
  }
`;

export default ProjectTemplate;
