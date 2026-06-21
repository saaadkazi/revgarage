const { auth } = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();


const {
    createCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar
} = require("../controller/carController");

router.post("/", auth, createCar);
router.get("/", auth, getAllCars);
router.get("/:id", auth, getCarById);
router.put("/:id", auth, updateCar);
router.delete("/:id", auth, deleteCar);

module.exports = router;

