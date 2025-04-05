const { cars, cars_items } = require('../models')

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

exports.registerItemsCar = async(req, res) => {
    try {
        const items = req.body;

        await cars_items.destroy({
            where: { car_id: req.params.id }
        })

        const cars_items_created = await cars_items.bulkCreate(
            items.map( name => (
                { name, car_id: req.params.id}
            ))
        )

        res.status(204).json()
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

exports.getCarById = async(req, res) => {
    try {
        const car = await cars.findOne({
            where: { id: req.params.id },
            attributes: ['id', 'brand', 'model', 'year', 'plate', 'created_at'],
            include: [{
                model: cars_items,
                as: 'cars_items',
                attributes: ['name'],
            }],
          });

        const items = car.cars_items.map(item => item.name);

        const response = {
            id: car.id,
            brand: car.brand,
            model: car.model,
            year: car.year,
            plate: car.plate,
            created_at: car.created_at,
            items: items 
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
