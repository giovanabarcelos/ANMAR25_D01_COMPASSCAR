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

        const response = {
            id: car.id, 
            brand: car.brand, 
            model: car.model, 
            year: car.year, 
            plate: car.plate, 
            created_at: car.created_at
        }

        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}