/*
This function returns paginated data from algolia
*/

const algoliasearch = require("algoliasearch");
require("dotenv").config();

const client = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);
const searchIndex = client.initIndex(process.env.ALGOLIA_INDEX);

const getPaginatedDataFromAlgolia = async (searchData) => {
  const { searchString, pageNo } = searchData;
  const response = await searchIndex.search(searchString, {
    page: pageNo - 1,
    hitsPerPage: 10,
  });
  return response;
};

module.exports = getPaginatedDataFromAlgolia;
