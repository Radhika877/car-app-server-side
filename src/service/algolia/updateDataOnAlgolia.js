/*
This function updates data on algolia after data is updated on Firebase.
*/

const algoliasearch = require("algoliasearch");
require("dotenv").config();

const client = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);
const index = client.initIndex(process.env.ALGOLIA_INDEX);

const updateDataOnAlgolia = async( objectID, data ) => {
    const object = {
        objectID,
        ...data,
    }
    await index.partialUpdateObject(object);
    return {
      valid : true
    }
}

module.exports = updateDataOnAlgolia;
