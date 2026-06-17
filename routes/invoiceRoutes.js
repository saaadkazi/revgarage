const express = require("express");

const {
    createInvoice,
    getInvoices,
    getInvoiceById,
} = require("../controller/invoiceController");

const router = express.Router();

// CREATE INVOICE
router.post("/invoices", createInvoice);

// GET ALL INVOICES
router.get("/invoices", getInvoices);

// GET INVOICE BY ID
router.get("/invoices/:id", getInvoiceById);

module.exports = router;