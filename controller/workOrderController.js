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

exports.getWorkOrderById = async (req, res) => {
    try {
        const workOrder = await WorkOrder.findById(req.params.id);

        if (!workOrder) {
            return res.status(404).json({
                success: false,
                message: "WorkOrder not found"
            });
        }

        res.status(200).json({
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

exports.updateWorkOrder = async (req, res) => {
    try {
        const workOrder = await WorkOrder.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!workOrder) {
            return res.status(404).json({
                success: false,
                message: "WorkOrder not found"
            });
        }

        res.status(200).json({
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

exports.deleteWorkOrder = async (req, res) => {
    try {
        const workOrder = await WorkOrder.findByIdAndDelete(req.params.id);

        if (!workOrder) {
            return res.status(404).json({
                success: false,
                message: "WorkOrder not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "WorkOrder deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};