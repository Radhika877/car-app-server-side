const getPaginatedDataFromAlgolia = require('./algolia/getPaginatedDataFromAlgolia')

const getDataService = async(searchData) => {
    const response = await getPaginatedDataFromAlgolia(searchData);
    return { status: 200, response }
};

module.exports = getDataService;
