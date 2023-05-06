const photoRouter = require('express').Router();

const {
    createCoverPhoto,
    getAllCoverPhotos,
    getCoverPhotosByRoomId,
    updateCoverPhoto,
    deleteCoverPhoto,
} = require('../controllers/photo_controller');
const { isAuthenticatedUser } = require('../middleware/auth');

photoRouter.post('/createCoverPhoto', isAuthenticatedUser,createCoverPhoto);

photoRouter.get('/getAllCoverPhotos', isAuthenticatedUser, getAllCoverPhotos);

photoRouter.get('/getCoverPhotosByRoomId/:room_id', getCoverPhotosByRoomId);

photoRouter.put('/updateCoverPhoto/:room_id', isAuthenticatedUser,updateCoverPhoto);

photoRouter.delete('/deleteCoverPhoto/:room_id',isAuthenticatedUser, deleteCoverPhoto);

module.exports = photoRouter;