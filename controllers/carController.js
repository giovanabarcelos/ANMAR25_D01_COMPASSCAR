exports.createCar = async(req, res) => {
    try {
        const {brand, model, year, plate} = req.body;

        const newCar = {
            'id': 1,
            'brand': brand, 
            'model': model, 
            'year': year, 
            'plate': plate, 
            'created_at': new Date().toISOString()
        }

        res.status(201).json(newCar)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}