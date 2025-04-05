const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')
const validateCar = require('../middlewares/validateCar')
const validateCarPlate = require('../middlewares/validateCarPlate')
const validateRegisterItemsCars = require('../middlewares/validateRegisterItemsCars')
const validateCarExists = require('../middlewares/validateCarExists')

router.post('/', validateCar, validateCarPlate, carController.createCar)
router.put('/:id/items', validateCarExists, validateRegisterItemsCars, carController.registerItemsCar)

module.exports = router;