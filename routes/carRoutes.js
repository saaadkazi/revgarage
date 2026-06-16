const express = require("express");
const router = express.Router();

const { createCar } = require("../controller/carController");

router.post("/", createCar);

module.exports = router;