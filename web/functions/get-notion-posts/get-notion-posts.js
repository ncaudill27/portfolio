require("dotenv").config();
const { Client } = require("@notionhq/client");
const { NOTION_TOKEN, NOTION_DB_ID } = process.env;

const notion = new Client({
  auth: NOTION_TOKEN
});
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async event => {

  const getPage = async pageId => {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
  };

  const getBlocks = async blockId => {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50
    });
    return response.results;
  };

  try {
    const response = await notion.databases.query({
      database_id: NOTION_DB_ID
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response, null, 1)
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
