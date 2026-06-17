const Modification = require("../models/Modification");

// CREATE MODIFICATION

const createModification = async (req, res) => {
    try {

        const { name, description, price, status } = req.body;

        const newModification = new Modification({
            name,
            description,
            price,
            status,
        });

        await newModification.save();

        res.status(201).json({
            message: "Modification Created Successfully",
            modification: newModification,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// GET ALL MODIFICATIONS

const getModifications = async (req, res) => {
    try {

        const modifications = await Modification.find();

        res.status(200).json(modifications);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// GET MODIFICATION BY ID

const getModificationById = async (req, res) => {
    try {

        const modification = await Modification.findById(req.params.id);

        res.status(200).json(modification);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// UPDATE MODIFICATION

const updateModification = async (req, res) => {
    try {

        const updatedModification = await Modification.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "Modification Updated Successfully",
            modification: updatedModification,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// DELETE MODIFICATION

const deleteModification = async (req, res) => {
    try {

        const deletedModification = await Modification.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({
            message: "Modification Deleted Successfully",
            modification: deletedModification,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

module.exports = {
    createModification,
    getModifications,
    getModificationById,
    updateModification,
    deleteModification,
};