// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});

const clientConfig = require("./client-config");

const { SANITY_READ_TOKEN, NODE_ENV, NOTION_TOKEN, NOTION_DB_ID } = process.env;

const isProd = NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd && SANITY_READ_TOKEN
      }
    },
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: NOTION_TOKEN,
        databaseId: NOTION_DB_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Open Sans",
              variants: ["300", "400", "500", "600", "700"]
            },
            {
              family: "Rubik",
              variants: ["500", "700", "900"]
            },
            {
              family: "Oxygen Mono",
              variants: ["400"]
            }
          ]
        }
      }
    }
  ]
};
