import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

import GraphQLErrorList from "../components/graphql-error-list";
import Header from "../components/headerTop";
import ProjectPreviewGrid from "../components/projectPreviewGrid";
import Layout from "../containers/layout";

const ProjectsPage = ({ data, errors }) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = data?.site;
  const projectNodes = mapEdgesToNodes(data?.projects);

  return (
    <Layout
      seo={{
        title: site.title,
        description: site.description,
        keywords: site.keywords
      }}
    >
      <Header />
      <ProjectPreviewGrid nodes={projectNodes} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectsPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    projects: allSanitySampleProject(limit: 6, filter: { slug: { current: { ne: null } } }) {
      edges {
        node {
          ...SanityProject
        }
      }
    }
  }
`;

export default ProjectsPage;
