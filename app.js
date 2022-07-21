/*
Initialised express instance
*/

const express = require('express');
const cors = require('cors');
require('dotenv').config()
const routes = require('./src/routes/index')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',routes)

module.exports = app
