//const userRoutes = require("./routes/userRoutes");
const customerRoutes = require("./routes/customerRoutes");
const modificationRoutes = require("./routes/modificationRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

console.log("PORT =", process.env.PORT);
console.log("MONGO_URI =", process.env.MONGO_URI);

const app = express();


// Connect MongoDB
connectDB();

app.use(express.json());

//Routes
//app.use("/api", userRoutes);
app.use("/api", customerRoutes);
app.use("/api", modificationRoutes);
app.use("/api", invoiceRoutes);

app.get("/", (req, res) => {
    res.send("RevGarage API is Running...🔥🚗");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});