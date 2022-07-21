/*
This API is used to populate customer specific data on the dialog modal.
*/

const getUserCarDataService = require("../service/getUserCarDataService");

const getUserCarDataController = async(req, res) => {
    try{
        const { docId } = req.query;
        const getUserCarDataServiceResult = await getUserCarDataService(docId);
        return res.status(getUserCarDataServiceResult.status).send({ data: getUserCarDataServiceResult.message });
    } catch(err){
        console.error('error', err);
        return res.status(500).send({ message: `Error occurred while fetching user car information ${err}` });
    }
}

module.exports = getUserCarDataController
