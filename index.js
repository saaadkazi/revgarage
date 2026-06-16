const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();


const app = express();

// Connect MongoDB
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("RevGarage API is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});