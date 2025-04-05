const { cars } = require('../models')

const validateCarExists = async (req, res, next) => {
    const car_id = req.params.id

    if (! await cars.findOne({where: {id: car_id} })){
        return res.status(404).json({ "errors": "car not found" })
    }

    next();    
}

module.exports = validateCarExists;