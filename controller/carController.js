const Car = require("../models/Car");

// Create Car
exports.createCar = async (req, res) => {
    try {
        const car = await Car.create(req.body);

        res.status(201).json({
            success: true,
            data: car
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};