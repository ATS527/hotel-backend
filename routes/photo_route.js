const photoRouter = require('express').Router();

const {
    createPhoto,
    getAllPhotosByType,
    getCoverPhotoByIdAndType,
    updatePhoto,
    deletePhoto,
    getAllPhotosByRoomId
} = require('../controllers/photo_controller');
const { isAuthenticatedUser } = require('../middleware/auth');

photoRouter.post('/createPhoto', isAuthenticatedUser,createPhoto);

photoRouter.get('/getAllPhotosByType/:type', isAuthenticatedUser, getAllPhotosByType);

photoRouter.get('/getCoverPhotoByIdAndType', getCoverPhotoByIdAndType);

photoRouter.put('/updatePhoto', isAuthenticatedUser,updatePhoto);

photoRouter.delete('/deletePhoto',isAuthenticatedUser, deletePhoto);

photoRouter.get('/getAllPhotosByRoomId/:id', getAllPhotosByRoomId);

module.exports = photoRouter;