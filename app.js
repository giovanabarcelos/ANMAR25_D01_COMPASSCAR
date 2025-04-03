const express = require('express')
const cors = require('cors')
const carRoutes = require('./routes/carRoutes')

const app = express(); 

app.use(express.json())
app.use(cors())

app.use('/api/v1/cars', carRoutes)

module.exports = app;