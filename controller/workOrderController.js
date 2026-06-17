const WorkOrder = require("../models/WorkOrder");

exports.createWorkOrder = async (req, res) => {
    try {
        const workOrder = await WorkOrder.create(req.body);

        res.status(201).json({
            success: true,
            data: workOrder
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getAllWorkOrders = async (req, res) => {
    try {
        const workOrders = await WorkOrder.find();

        res.status(200).json({
            success: true,
            count: workOrders.length,
            data: workOrders
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};