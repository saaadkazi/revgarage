const mongoose = require("mongoose");

const workOrderSchema = new mongoose.Schema(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true
        },

        carId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Car",
            required: true
        },

        serviceType: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: ["Pending", "In Progress", "Completed"],
            default: "Pending"
        },

        estimatedCost: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("WorkOrder", workOrderSchema);