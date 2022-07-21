const updateCarInfoOnFirebase = require("../dbOps/updateDataOnDb");
const updateDataOnAlgolia = require("./algolia/updateDataOnAlgolia");

const updateDataService = async(docId, updatedData) => {
    const { valid, message } = await updateCarInfoOnFirebase(docId, updatedData);
    if(!valid){
        return { status: 500, message }
    }
    await updateDataOnAlgolia(docId, updatedData);
    return { status: 200, message: 'Updated data on database' }
}

module.exports =updateDataService;
