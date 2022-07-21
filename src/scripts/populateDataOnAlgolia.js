/*
Script to push Firebase data to Algolia.
*/

const firebase = require('../utils/firebase/index');
const algoliasearch = require('algoliasearch');
require('dotenv').config();

const client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_ADMIN_API_KEY);
const index = client.initIndex(process.env.ALGOLIA_INDEX);

const main = async() => {
    console.log('Script started')
    const carInfoDocs = await firebase().firestore.collection('car_info').get();
    const userData = await Promise.all(
        carInfoDocs.docs.map(async(doc) => {
            const userDocRef = await doc.data().userRef.get();
            const userId = userDocRef.data().customerId;
            return {
                objectID: doc.id,
                customerId: userId,
                ...doc.data(),
            }
        })
    );
    await index.saveObjects(userData);
    console.log('Done populating docs on algolia');
}

main();
