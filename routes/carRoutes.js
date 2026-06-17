const express = require("express");
const router = express.Router();

const {
    createCar,
    getAllCars,
    getCarById,
    updateCar
} = require("../controller/carController");

router.post("/", createCar);
router.get("/", getAllCars);
router.get("/:id", getCarById);
router.put("/:id", updateCar);

module.exports = router;

