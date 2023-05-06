const admin = require('../models/user_model');
const sendToken = require('../utils/jwtToken');
const bcrypt = require('bcryptjs');

exports.createAdmin = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const data = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        phone_number: req.body.phone_number,
        role: 'admin',
        };
        const adminData = await admin.create(data);
        res.status(201).json({ success: true, data: adminData });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await admin.findAll();
        res.json({ success: true, data: admins });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

exports.deleteAdmin = async (req, res) => {
    try {
        const adminData = await admin.findByPk(req.params.id);
        if (!adminData) {
            res.status(404).json({ success: false, message: 'Admin not found' });
        } else {
            await adminData.destroy();
            res.json({ success: true, message: 'Admin deleted successfully' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

exports.loginAdmin = async (req, res) => {
    try {
        const adminData = await admin.findOne({ where: { email: req.body.email } });
        if (!adminData) {
            res.status(404).json({ success: false, message: 'Admin not found' });
        } else {
            const match = await bcrypt.compare(req.body.password, adminData.password);
            if (!match) {
                res.status(401).json({ success: false, message: 'Incorrect password' });
            } else {
                sendToken(adminData, 201, res);
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

exports.logoutAdmin = async (req, res) => {
    try {
        res.cookie('token', null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        });
        res.status(200).json({ success: true, message: 'Logged out successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}