const express = require("express");
const router = express.Router();

const {
    createWorkOrder,
    getAllWorkOrders,
    getWorkOrderById,
    updateWorkOrder
} = require("../controller/workOrderController");

router.post("/", createWorkOrder);
router.get("/", getAllWorkOrders);
router.get("/:id", getWorkOrderById);
router.put("/:id", updateWorkOrder);

module.exports = router;