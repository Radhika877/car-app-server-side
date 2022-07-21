const firebase = require("../utils/firebase/index");

const getUserCarDataFromDb = async(documentId) => {
    try{
        const carInfoRef = await firebase().firestore.collection('car_info').doc(documentId).get();
        const carData = carInfoRef.data();
        const userDocRef = await carData.userRef.get();
        const userData = userDocRef.data();
        return { valid: true, data: {...carData, ...userData} }
    } catch(err){
        console.log(err)
        return { valid: false, data: {} }
    }
}

module.exports = getUserCarDataFromDb;
