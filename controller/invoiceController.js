const Invoice = require("../models/invoice");

// CREATE INVOICE

const createInvoice = async (req, res) => {
    try {

        const {
            customerName,
            vehicleNumber,
            serviceName,
            amount,
            status
        } = req.body;

        const newInvoice = new Invoice({
            customerName,
            vehicleNumber,
            serviceName,
            amount,
            status,
        });

        await newInvoice.save();

        res.status(201).json({
            message: "Invoice Created Successfully",
            invoice: newInvoice,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};


// GET ALL INVOICES

const getInvoices = async (req, res) => {
    try {

        const invoices = await Invoice.find();

        res.status(200).json(invoices);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// GET INVOICE BY ID

const getInvoiceById = async (req, res) => {
    try {

        const invoice = await Invoice.findById(req.params.id);

        res.status(200).json(invoice);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

module.exports = {
    createInvoice,
    getInvoices,
    getInvoiceById,
};


