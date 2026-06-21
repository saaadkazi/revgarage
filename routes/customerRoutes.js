const { auth } = require("../middleware/authMiddleware");
const express = require("express");

const { createCustomer, getCustomers, getCustomerById, updateCustomer, deleteCustomer } = require("../controller/customerController");

const router = express.Router();

router.post("/customers", auth, createCustomer);
router.get("/customers", auth, getCustomers);
router.get("/customers/:id", auth, getCustomerById);
router.put("/customers/:id", auth, updateCustomer);
router.delete("/customers/:id", auth, deleteCustomer);

module.exports = router;