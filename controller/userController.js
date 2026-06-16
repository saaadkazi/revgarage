const User = require("../models/user");

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = new User({
            name,
            email,
            password,
            role: "customer",
        });

        await newUser.save();

        res.status(201).json({
            message: "User Created Successfully",
            user: newUser,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    registerUser,
};