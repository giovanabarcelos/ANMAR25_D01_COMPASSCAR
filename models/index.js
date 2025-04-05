const sequelize = require('../config/database')
const cars = require('./cars')
const cars_items = require('./cars_items')

const db = { sequelize, cars, cars_items }

module.exports = db 
