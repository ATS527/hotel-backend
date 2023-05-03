const Manager = require("../models/user_model");
const sendToken = require("../utils/jwtToken");

exports.createManager = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.manager_password, 10);
        const data = {
            id: req.body.id,
            manager_name: req.body.manager_name,
            manager_email: req.body.manager_email,
            manager_password: hashedPassword,
            manager_phone_number: req.body.manager_phone_number
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
        const managers = await Manager.findAll();
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
            await manager.update(req.body);
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

exports.loginUser = async (req, res) => {
    try {
        const manager = await Manager.findOne({ where: { manager_email: req.body.manager_email } });
        if (!manager) {
            res.status(404).json({ success: false, message: "Manager not found" });
        } else {
            const match = await bcrypt.compare(req.body.manager_password, manager.manager_password);
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

exports.logoutUser = async (req, res) => {
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