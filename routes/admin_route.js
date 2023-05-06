const adminRouter = require('express').Router();

const {
    createAdmin,
    getAllAdmins,
    deleteAdmin,
    loginAdmin,
    logoutAdmin
} = require('../controllers/admin_controller');

adminRouter.post('/createAdmin', createAdmin);

adminRouter.get('/getAllAdmins', getAllAdmins);

adminRouter.delete('/deleteAdmin/:id', deleteAdmin);

adminRouter.post('/loginAdmin', loginAdmin);

adminRouter.get('/logoutAdmin', logoutAdmin);

module.exports = adminRouter;