const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')
const validateCar = require('../middlewares/validateCar')
const validateCarPlate = require('../middlewares/validateCarPlate')

router.post('/', validateCar, validateCarPlate, carController.createCar)

module.exports = router;