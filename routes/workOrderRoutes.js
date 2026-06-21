const express = require("express");
const router = express.Router();

const {
    createWorkOrder,
    getAllWorkOrders,
    getWorkOrderById,
    updateWorkOrder,
    deleteWorkOrder
} = require("../controller/workOrderController");
const { auth } = require("../middleware/authMiddleware");


router.post("/", auth, createWorkOrder);
router.get("/", auth, getAllWorkOrders);
router.get("/:id", auth, getWorkOrderById);
router.put("/:id", auth, updateWorkOrder);
router.delete("/:id", auth, deleteWorkOrder);

module.exports = router;