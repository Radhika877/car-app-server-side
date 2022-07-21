/*
This API takes the document ID and update field data
and updates the values on Firebase.
*/

const updateDataService = require("../service/updateDataService");

const updateDataController = async(req, res) => {
    try{
        const { objectID:firebaseDocId, updatedData } = req.body;
        const updateDataServiceResult = await updateDataService(firebaseDocId, updatedData);
        return res.status(updateDataServiceResult.status).send({ "data": updateDataServiceResult.message })
    } catch(err){
        console.error('error', err);
        return res.status(500).send({ "message": `Error occured while updating car info ${err}` })
    }
}

module.exports = updateDataController;
