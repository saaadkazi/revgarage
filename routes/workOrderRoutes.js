const express = require("express");
const router = express.Router();

const {
    createWorkOrder,
    getAllWorkOrders,
    getWorkOrderById
} = require("../controller/workOrderController");

router.post("/", createWorkOrder);
router.get("/", getAllWorkOrders);
router.get("/:id", getWorkOrderById);

module.exports = router;