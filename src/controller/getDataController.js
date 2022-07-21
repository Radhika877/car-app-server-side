/*
This API returns the list of rows for car and customer information.
This also takes in search string (Sales ID or Customer ID) as param
and returns the relevant results.
*/

const getDataService = require("../service/getDataService");

const getDataController = async(req, res) => {
    try{
        const { searchString, pageNo } = req.query;
        const searchOptions = {
            searchString,
            pageNo
        }
        const getDataServiceResult = await getDataService(searchOptions);
        return res.status(getDataServiceResult.status).send({ "result": getDataServiceResult.response })
    } catch(err){
        console.error('error', err);
        return res.status(500).send({ message: `Error occured while fetching user car info ${err}` })
    }
}

module.exports = getDataController;
