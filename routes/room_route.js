const roomRouter = require('express').Router();

const { createRoom, getRooms, getRoom, updateRoom, deleteRoom } = require('../controllers/room_manager_controller');

roomRouter.post('/createRoom', createRoom);

roomRouter.get('/getRooms', getRooms);

roomRouter.get('/getRoom/:id', getRoom);

roomRouter.put('/updateRoom/:id', updateRoom);

roomRouter.delete('/deleteRoom/:id', deleteRoom);

module.exports = roomRouter;