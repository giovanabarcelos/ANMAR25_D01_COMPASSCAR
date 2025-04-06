const { cars, cars_items } = require('../models')
const sequelize = require('../config/database');

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

exports.listCars = async(req, res) => {
    try {
        const {year, final_plate, brand, page, limit} = req.query

        const pageNum = Math.max(parseInt(page) || 1, 1)
        let limitNum = parseInt(limit) || 5; 
        if (limitNum < 1) limitNum = 5; 
        if (limitNum > 10) limitNum = 10;
        const offset = (pageNum -1) * limitNum;

        const where = {}

        if (year) { 
            where.year = { [sequelize.Sequelize.Op.gte]: parseInt(year)}
        }

        if (brand) {
            where.brand = { [sequelize.Sequelize.Op.like]: `%${brand}%`}
        }
        
        if (final_plate) {
            where.plate = sequelize.where(
              sequelize.fn('substr', sequelize.col('plate'), -1),
              final_plate
            )
        }

        console.log(where)

        const {rows: data, count} = await cars.findAndCountAll( {
            where, offset, limit: limitNum, order: [['id', 'ASC']]
        })
        
        const pages = Math.ceil( count / limitNum )

        res.status(200).json({
            count, pages, data
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.updateCar = async(req, res) => {
    try {
        const {brand, model, year, plate} = req.body;

        const car = await cars.findByPk(req.params.id)

        const fieldsToUpdate = {}
        if (brand) fieldsToUpdate.brand = brand
        if (model) fieldsToUpdate.model = model
        if (year) fieldsToUpdate.year = year
        if (plate) fieldsToUpdate.plate = plate

        await car.update(fieldsToUpdate)

        return res.status(204).send();
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}