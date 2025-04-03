const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')
const validateCar = require('../middlewares/validateCar')

router.post('/', validateCar, carController.createCar)

module.exports = router;