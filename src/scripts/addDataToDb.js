/*
Script to upload sample json data for car and customer on Firebase
*/

const firebase = require('../utils/firebase/index')
const jsonData = require('./insuranceData.json')

const addDataToDb = async() =>{
    await Promise.all(
        jsonData.map(async(item) => {
            const userData ={
                customerId : item['Customer_id'],
                customerGender : item['Customer_Gender'],
                customerIncome : item['Customer_Income group'],
                customerRegion : item['Customer_Region'],
                customerMaritalStatus : item['Customer_Marital_status']
            }
            const userDoc = await firebase().firestore.collection('users').add(userData);
            const userCarInfo = {
                salesId: item['sales_id'],
                dateOfPurchase: item['Date of Purchase'],
                fuel: item['Fuel'],
                vehicleSegment: item['VEHICLE_SEGMENT'],
                sellingPrice: item['SellingPrice'],
                powerSteering:item['Power_steering'],
                airBags:item['airbags'],
                sunRoof: item['sunroof'],
                mattFinish: item['Matt_finish'],
                musicSystem:item['music system'],
                userRef: (await firebase().firestore.collection('users').doc(userDoc.id).get()).ref
            }
            const userCarDoc = await firebase().firestore.collection('car_info').add(userCarInfo);
            console.log(`Created user doc with doc id ${userDoc.id} and userCarDoc with doc id ${userCarDoc.id}`);
        })
    )
}

addDataToDb();



