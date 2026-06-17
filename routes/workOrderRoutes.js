const express = require("express");
const router = express.Router();

const {
    createWorkOrder,
    getAllWorkOrders
} = require("../controller/workOrderController");

router.post("/", createWorkOrder);
router.get("/", getAllWorkOrders);

module.exports = router;