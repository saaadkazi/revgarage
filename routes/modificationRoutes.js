const express = require("express");

const {
    createModification,
    getModifications,
    getModificationById,
    updateModification,
    deleteModification,
} = require("../controller/modificationController");

const router = express.Router();

// CREATE MODIFICATION
router.post("/modifications", createModification);

// GET ALL MODIFICATIONS
router.get("/modifications", getModifications);

// GET MODIFICATION BY ID
router.get("/modifications/:id", getModificationById);

// UPDATE MODIFICATION
router.put("/modifications/:id", updateModification);

// DELETE MODIFICATION
router.delete("/modifications/:id", deleteModification);

module.exports = router;