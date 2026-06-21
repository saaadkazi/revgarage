const { auth } = require("../middleware/authMiddleware");
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
router.post("/modifications", auth, createModification);

// GET ALL MODIFICATIONS
router.get("/modifications", auth, getModifications);

// GET MODIFICATION BY ID
router.get("/modifications/:id", auth, getModificationById);

// UPDATE MODIFICATION
router.put("/modifications/:id", auth, updateModification);

// DELETE MODIFICATION
router.delete("/modifications/:id", auth, deleteModification);

module.exports = router;