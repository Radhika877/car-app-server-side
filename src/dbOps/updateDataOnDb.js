/*
This function takes the document id and updated data 
and updates the fields on Firebase.
*/

const firebase = require("../utils/firebase/index");

const updateCarInfoOnFirebase = async(docId, updatedData) => {
    try{
        await firebase().firestore.collection('car_info').doc(docId).update({
            ...updatedData,
            updatedAt: new Date(),
        });
        return { valid: true, message: "Updated data on firebase" };
    } catch(err){
        console.log(err)
        return { valid: false, message: "Failed to update data on firebase" };
    }
}

module.exports = updateCarInfoOnFirebase;
