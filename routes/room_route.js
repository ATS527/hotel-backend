const roomRouter = require('express').Router();

const { createRoom, getRooms, getRoom, updateRoom, deleteRoom } = require('../controllers/room_manager_controller');

const { isAuthenticatedUser} = require("../middleware/auth");

roomRouter.post('/createRoom',isAuthenticatedUser, createRoom);

roomRouter.get('/getRooms', getRooms);

roomRouter.get('/getRoom/:id', getRoom);

roomRouter.put('/updateRoom/:id',isAuthenticatedUser, updateRoom);

roomRouter.delete('/deleteRoom/:id',isAuthenticatedUser, deleteRoom);

module.exports = roomRouter;