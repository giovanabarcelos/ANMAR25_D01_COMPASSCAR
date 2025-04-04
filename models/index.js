const sequelize = require('../config/database')
const cars = require('./cars')

const db = { sequelize, cars }

module.exports = db 
