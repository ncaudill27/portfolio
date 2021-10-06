import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";

import Header from "../components/headerTop";
import ProjectPreviewGrid from "../components/project-preview-grid";
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

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
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
