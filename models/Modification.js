const mongoose = require("mongoose");

const modificationSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    status: String,
});

const modification = mongoose.model(
    "Modification",
    modificationSchema
);

module.exports = modification;


