require("dotenv").config();
const { Client, APIErrorCode } = require("@notionhq/client");
const { NOTION_TOKEN, NOTION_DB_ID } = process.env;

const notion = new Client({
  auth: NOTION_TOKEN
});

const today = new Date().toISOString().slice(0, 10)
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async event => {

  const getDatabase = async () => {
    const response = await notion.databases.query({
      database_id: NOTION_DB_ID,
      filter: {
        and: [
          {
            property: "Active",
            checkbox: {
              equals: true
            }
          },
          {
            property: "Date",
            date: {
              before: today
            }
          }
        ]
      }
    });
    return response.results;
  };
  
  const getPage = async pageId => {
    return await notion.pages.retrieve({ page_id: pageId });
  };

  const getBlocks = async blockId => {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50
    });
    return response.results;
  };

  try {
    const database = await getDatabase();
    console.log(database);

    return {
      statusCode: 200,
      body: JSON.stringify({ data: JSON.stringify(database) })
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
