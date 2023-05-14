const photoRouter = require('express').Router();

const {
    createRoomPhoto,
    getAllRoomPhotos,
    getRoomPhotoById,
    updateRoomPhoto,
    deleteRoomPhotos,
    getAllPhotosByRoomId
} = require('../controllers/room_photo_controller');
const { isAuthenticatedUser } = require('../middleware/auth');

photoRouter.post('/createRoomPhoto', isAuthenticatedUser, createRoomPhoto);

photoRouter.get('/getAllRoomPhotos', isAuthenticatedUser, getAllRoomPhotos);

photoRouter.get('/getRoomPhotoById/:room_id', getRoomPhotoById);

photoRouter.put('/updateRoomPhoto', isAuthenticatedUser, updateRoomPhoto);

photoRouter.delete('/deleteRoomPhotos/:room_id', isAuthenticatedUser, deleteRoomPhotos);

photoRouter.get('/getAllPhotosByRoomId/:room_id', getAllPhotosByRoomId);

module.exports = photoRouter;