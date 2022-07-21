/*
Routes for all the APIs defined
*/
const express = require('express');
const router = express.Router();

const getDataController = require('../controller/getDataController');
const getUserCarDataController = require('../controller/getUserCarDataController');
const updateDataController = require('../controller/updateDataController');

router.get("/", getDataController);
router.get("/car-data", getUserCarDataController);
router.patch("/", updateDataController);

module.exports = router;
