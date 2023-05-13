const Rooms = require("../models/room_model");
const Activity_Log = require("../models/activity_log_model");
const { nanoid } = require("nanoid");
const Photos = require("../models/photo_models");

exports.createRoom = async (req, res) => {
    try {
        const newRoom = await Rooms.create(req.body);

        const activityLog = await Activity_Log.create({
            log_id: nanoid(),
            manager_id: req.user.id,
            log: `Room created with data ${JSON.stringify(req.body)}`
        });

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

exports.getRoomAndImagesByRoomId = async (req, res) => {
    try {
        const rooms = await Rooms.findOne({
            where: {
                room_id: req.params.room_id
            }
        });

        if (!rooms) {
            return res.status(404).json({ success: false, message: "Room not found" });
        }

        const images = await Photos.findAll({
            where: {
                room_id: req.params.room_id
            }
        });

        res.status(200).json({
            success: true,
            rooms,
            images
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, message: err.message });
    }
}

exports.getRoomsAndImages = async (req, res) => {
    try {
        const rooms = await Rooms.findAll();

        if (!rooms) {
            return res.status(404).json({ success: false, message: "Room not found" });
        }

        const roomsWithImages = [];

        for (let i = 0; i < rooms.length; i++) {
            const images = await Photos.findAll({
                where: {
                    room_id: rooms[i].room_id
                }
            });

            roomsWithImages.push({
                room: rooms[i],
                images
            });
        }

        res.status(200).json({
            success: true,
            roomsWithImages
        });
    } catch (err) {
        console.log(err);
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

        const activityLog = await Activity_Log.create({
            log_id: nanoid(),
            manager_id: req.user.id,
            log: `Kitchen Inventory ${id} updated with data ${JSON.stringify(req.body)}`
        });

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

        const activityLog = await Activity_Log.create({
            log_id: nanoid(),
            manager_id: req.user.id,
            log: `Room ${req.params.id} deleted`
        });

        res.status(200).json({ success: true, message: "Room deleted successfully" });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}