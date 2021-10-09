const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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
      allNotion(filter: { properties: { Active: { value: { eq: true } } } }) {
        edges {
          node {
            id
            title
            properties {
              slug {
                value {
                  string
                }
              }
              date: Date {
                value {
                  start
                }
              }
            }
          }
        }
      }
    }
  `);

  const postEdges = (result.data.allNotion || {}).edges || [];

  postEdges.forEach(({ node }) => {
    const id = node.id;
    const slug = node.properties.slug.value.string;
    const path = `/posts/${slug}`;

    createPage({
      path,
      component: require.resolve("./src/templates/post.js"),
      context: { id }
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createProjectPages(graphql, actions);
  await createPostPages(graphql, actions);
};
