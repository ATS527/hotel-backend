const Manager = require("../models/user_model");
const sendToken = require("../utils/jwtToken");
const bcrypt = require("bcryptjs");

exports.createManager = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const data = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            phone_number: req.body.phone_number,
            role: "manager"
        }
        const manager = await Manager.create(data);
        res.status(201).json({ success: true, data: manager });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

exports.getAllManagers = async (req, res) => {
    try {
        const managers = await Manager.findAll({
            where: {
                role: "manager"
            }
        });
        res.json({ success: true, data: managers });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

exports.getManagerById = async (req, res) => {
    try {
        const manager = await Manager.findByPk(req.params.id);
        if (!manager) {
            res.status(404).json({ success: false, message: "Manager not found" });
        } else {
            res.json({ success: true, data: manager });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

exports.updateManager = async (req, res) => {
    try {
        const manager = await Manager.findByPk(req.params.id);
        if (!manager) {
            res.status(404).json({ success: false, message: "Manager not found" });
        } else {

            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;
            const hashedPassword = await bcrypt.hash(password, 10);
            const phone_number = req.body.phone_number;

            await manager.update({
                name: name,
                email: email,
                password: hashedPassword,
                phone_number: phone_number
            });

            res.json({ success: true, data: manager });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

exports.deleteManager = async (req, res) => {
    try {
        const manager = await Manager.findByPk(req.params.id);
        if (!manager) {
            res.status(404).json({ success: false, message: "Manager not found" });
        } else {
            await manager.destroy();
            res.json({ success: true, message: "Manager deleted successfully" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

exports.loginManager = async (req, res) => {
    try {
        const manager = await Manager.findOne({ where: { email: req.body.email } });
        if (!manager) {
            res.status(404).json({ success: false, message: "Manager not found" });
        } else {
            const match = await bcrypt.compare(req.body.password, manager.password);
            if (match) {
                sendToken(manager, 201, res);
            } else {
                res.status(401).json({ success: false, message: "Incorrect password" });
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

exports.logoutManager = async (req, res) => {
    try {
        res.cookie("token", null, { expires: new Date(Date.now()), httpOnly: true });
        res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

exports.currentlyLoggedInUser = async (req, res) => {
    try {
        const manager = await Manager.findByPk(req.user.id);
        res.json({ success: true, data: manager });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}