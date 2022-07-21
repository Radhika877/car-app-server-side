const getUserCarDataFromDb = require("../dbOps/getUserCarDataFromDb");

const getUserCarDataService = async( docId ) => {
    const { valid, data } = await getUserCarDataFromDb(docId);
    if(!valid) return { status: 500, message: "Something went wrong while fetching data" }
    return { status: 200, message: data }
}

module.exports = getUserCarDataService;
