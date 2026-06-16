const express = require("express");
const router = express.Router();

const { createCar, getAllCars } = require("../controller/carController");

router.post("/", createCar);
router.get("/", getAllCars);

module.exports = router;