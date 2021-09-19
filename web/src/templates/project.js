import React from "react";
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
      {errors && <SEO title="GraphQL Error" />}
      {project && <SEO title={project.title || "Untitled"} />}

      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}
      <MaxWidthWrapper width={2000}>
        <img
          src={imageUrlFor(buildImageObj(project.mainImage))
            .width(2000)
            .height(500)
            .url()}
          alt={project.mainImage.alt}
        />
        <Project {...project} />
      </MaxWidthWrapper>
    </>
  );
};

export default ProjectTemplate;
