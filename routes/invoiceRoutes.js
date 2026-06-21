const { auth } = require("../middleware/authMiddleware");
const express = require("express");

const {
    createInvoice,
    getInvoices,
    getInvoiceById,
} = require("../controller/invoiceController");

const router = express.Router();

// CREATE INVOICE
router.post("/invoices", auth, createInvoice);

// GET ALL INVOICES
router.get("/invoices", auth, getInvoices);

// GET INVOICE BY ID
router.get("/invoices/:id", auth, getInvoiceById);

module.exports = router;