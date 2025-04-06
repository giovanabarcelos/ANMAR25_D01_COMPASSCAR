const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')
const validateCar = require('../middlewares/validateCar')
const validateCarPlate = require('../middlewares/validateCarPlate')
const validateRegisterItemsCars = require('../middlewares/validateRegisterItemsCars')
const validateCarNotExists = require('../middlewares/validateCarNotExists')
const validateCarOnUpdate = require('../middlewares/validateCarOnUpdate')

router.post('/', validateCar, validateCarPlate, carController.createCar)
router.put('/:id/items', validateCarNotExists, validateRegisterItemsCars, carController.registerItemsCar)
router.get('/:id', validateCarNotExists, carController.getCarById)
router.get('/', carController.listCars)
router.patch('/:id',validateCarOnUpdate, validateCarPlate, validateCarNotExists, carController.updateCar)
router.delete('/:id', validateCarNotExists, carController.deleteCar)

module.exports = router;