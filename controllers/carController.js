const { cars } = require('../models')

exports.createCar = async(req, res) => {
    try {
        const {brand, model, year, plate} = req.body;

        const newCar = {
            'brand': brand, 
            'model': model, 
            'year': year, 
            'plate': plate
        }

        const car = await cars.create(newCar)

        res.status(201).json(car)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}