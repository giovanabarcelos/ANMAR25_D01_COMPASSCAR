const validateCarOnUpdate = (req, res, next) => {
    const { brand, model, year, plate} = req.body
    const errors = []; 

    if (brand && !model) errors.push("model must also be informed")

    if (year && ( isNaN(year) || year < 2016 || year > 2026)){
        errors.push('year must be between 2016 and 2026')
    }

    if (plate && !/^[A-Z]{3}-[0-9][A-J0-9][0-9]{2}$/.test(plate)) {
        errors.push('plate must be in the correct format ABC-1C34')
    }

    if (errors.length > 0){
        return res.status(400).json({ errors })
    }

    next();
    
}

module.exports = validateCarOnUpdate;