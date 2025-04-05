const validateRegisterItemsCars = (req, res, next) => {
    const items = req.body;
    const errors = []; 

    if (!Array.isArray(items) ){
        errors.push("items is required")
    } else {
        if ( items.length === 0 ) {
            errors.push("items is required")
        }

        if ( items.length > 5){
            errors.push("items must be a maximum of 5")
        }

        if ( new Set(items).size !== items.length){
            errors.push("items cannot be repeated")
        }
    }

    if (errors.length > 0){
        return res.status(404).json({ errors })
    }

    next();
    
}

module.exports = validateRegisterItemsCars;


