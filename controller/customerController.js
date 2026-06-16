const Customer = require("../models/customer");

const createCustomer = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        const newCustomer = new Customer({
            name,
            email,
            phone,
        });

        await newCustomer.save();

        res.status(201).json({
            message: "Customer Created Successfully",
            customer: newCustomer,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};



//GET all customer

const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);

    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


// get customer by id

const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        res.status(200).json(customer);
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


//update customer

const updateCustomer = async (req, res) => {
    try {

        const updatedCustomer = await Customer.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "Customer Updated Successfully",
            customer: updatedCustomer,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

//Delete customer

const deleteCustomer = async (req, res) => {
    try {
        const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Customer Deleted Successfully",
            customer: deletedCustomer,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
};