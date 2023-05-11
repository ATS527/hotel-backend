const Rooms = require("../models/room_model");

exports.createRoom = async (req, res) => {
    try {
        const newRoom = await Rooms.create(req.body);
        res.status(201).json({
            success: true,
            newRoom
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}


exports.getRooms = async (req, res) => {
    try {
        const rooms = await Rooms.findAll();
        res.status(200).json({
            success: true,
            rooms
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

exports.getRoom = async (req, res) => {
    try {
        const room = await Rooms.findByPk(req.params.id);

        if (!room) {
            return res.status(404).json({ success: false, message: "Room not found" });
        }

        res.status(200).json({
            success: true,
            room
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

exports.updateRoom = async (req, res) => {
    try {
        const room = await Rooms.findByPk(req.params.id);
        await room.update(req.body);
        res.status(200).json({
            success: true,
            room
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

exports.deleteRoom = async (req, res) => {
    try {
        const room = await Rooms.findByPk(req.params.id);

        if (!room) {
            return res.status(404).json({ success: false, message: "Room not found" });
        }

        await room.destroy();
        res.status(200).json({ success: true, message: "Room deleted successfully" });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}