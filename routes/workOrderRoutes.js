const express = require("express");
const router = express.Router();

const { createWorkOrder } = require("../controller/workOrderController");

router.post("/", createWorkOrder);

module.exports = router;