const { cars } = require('../models')

const validateCarPlate = async (req, res, next) => {
    const { plate } = req.body

    if (await cars.findOne({where: {plate} })){
        return res.status(409).json({ "errors": "car already registered" })
    }

    next();
    
}

module.exports = validateCarPlate;