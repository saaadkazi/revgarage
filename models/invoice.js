const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    customerName: String,
    vehicleNumber: String,
    serviceName: String,
    amount: Number,
    status:String,
});

const invoice = mongoose.model("Invoice",invoiceSchema);

module.exports = invoice;
    
