const { createRemoteFileNode } = require("gatsby-source-filesystem");
const { isFuture, parseISO } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createHeroImageSchemaCustomization({ createTypes }) {
  createTypes(`
    type MarkdownRemark implements Node {
      heroImg: File @link(from: "heroImg___NODE")
    }
  `);
}

async function createProjectPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanitySampleProject(filter: { slug: { current: { ne: "null" } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const projectEdges = (result.data.allSanitySampleProject || {}).edges || [];

  projectEdges.forEach(edge => {
    const id = edge.node.id;
    const slug = edge.node.slug.current;
    const path = `/projects/${slug}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: { id }
    });
  });
}

async function createPostPages(graphql, { createPage }) {
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { Active: { eq: true } } }) {
        edges {
          node {
            id
            frontmatter {
              slug {
                string
              }
              date: Date {
                start
              }
            }
          }
        }
      }
    }
  `);

  const postEdges = (result.data.allMarkdownRemark || {}).edges || [];

  postEdges
    .filter(({ node }) => !isFuture(parseISO(node.frontmatter.date.start)))
    .forEach(({ node }) => {
      const id = node.id;
      const slug = node.frontmatter.slug.string;
      const path = `/posts/${slug}`;

      createPage({
        path,
        component: require.resolve("./src/templates/post.js"),
        context: { id }
      });
    });
}

exports.createSchemaCustomization = async ({ actions }) => {
  await createHeroImageSchemaCustomization(actions);
};

exports.onCreateNode = async ({ node, actions: { createNode }, store, cache, createNodeId }) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (node.internal.type === "MarkdownRemark" && node.frontmatter.Hero.length > 0) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.Hero[0].file.url, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store // Gatsby's Redux store
    });
    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.heroImg___NODE = fileNode.id;
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  await createProjectPages(graphql, actions);
  await createPostPages(graphql, actions);
};
