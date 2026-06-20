const userRoutes = require("./routes/userRoutes");
const customerRoutes = require("./routes/customerRoutes");
const modificationRoutes = require("./routes/modificationRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const workOrderRoutes = require("./routes/workOrderRoutes");
const carRoutes = require("./routes/carRoutes");

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const app = express();

connectDB();
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", customerRoutes);
app.use("/api", modificationRoutes);
app.use("/api", invoiceRoutes);
app.use("/api/workorders", workOrderRoutes);
app.use("/api/cars", carRoutes);

app.get("/", (req, res) => {
    res.send("RevGarage API is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});