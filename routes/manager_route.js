const managerRouter = require("express").Router();

const {
    getAllManagers,
    getManagerById,
    createManager,
    updateManager,
    deleteManager,
    loginUser,
    logoutUser,
    currentlyLoggedInUser,
    loginManager,
    logoutManager,
} = require("../controllers/manager_controller");
const { authorizeRoles, isAuthenticatedUser } = require("../middleware/auth");

managerRouter.get("/getAllManagers",isAuthenticatedUser,authorizeRoles("admin"), getAllManagers);

managerRouter.post("/createManager", isAuthenticatedUser,authorizeRoles("admin"),createManager);

managerRouter.get("/getManagerById/:id",isAuthenticatedUser,authorizeRoles("admin") ,getManagerById);

managerRouter.put("/updateManager/:id", isAuthenticatedUser,authorizeRoles("admin"),updateManager);

managerRouter.delete("/deleteManager/:id",isAuthenticatedUser,authorizeRoles("admin"), deleteManager);

managerRouter.post("/login", loginManager);

managerRouter.get("/logout", isAuthenticatedUser,logoutManager);

managerRouter.get("/me", isAuthenticatedUser,currentlyLoggedInUser);

module.exports = managerRouter;