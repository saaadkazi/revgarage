const express = require("express");
const router = express.Router();

const {
    createWorkOrder,
    getAllWorkOrders,
    getWorkOrderById,
    updateWorkOrder,
    deleteWorkOrder
} = require("../controller/workOrderController");

router.post("/", createWorkOrder);
router.get("/", getAllWorkOrders);
router.get("/:id", getWorkOrderById);
router.put("/:id", updateWorkOrder);
router.delete("/:id", deleteWorkOrder);

module.exports = router;