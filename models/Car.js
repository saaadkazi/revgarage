const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true
        },

        brand: {
            type: String,
            required: true,
            trim: true
        },

        model: {
            type: String,
            required: true,
            trim: true
        },

        year: {
            type: Number,
            required: true
        },

        numberPlate: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        color: {
            type: String,
            required: true,
            trim: true
        },

        fuelType: {
            type: String,
            required: true,
            enum: ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Car", carSchema);