const express = require("express");
const enquirerRouter = express.Router();

const {
    getAllEnquirers,
    getEnquirer,
    createEnquirer,
    updateEnquirer,
    deleteEnquirer,
} = require("../controllers/enquirers_controller");

const {
    isAuthenticatedUser,
 } = require("../middleware/auth");

 enquirerRouter.get("/getAllEnquirers", isAuthenticatedUser,getAllEnquirers);

 enquirerRouter.get("/getEnquirer/:name", isAuthenticatedUser,getEnquirer);

 enquirerRouter.post("/createEnquirer", isAuthenticatedUser,createEnquirer);

 enquirerRouter.put("/updateEnquirer/:name", isAuthenticatedUser,updateEnquirer);

 enquirerRouter.delete("/deleteEnquirer/:name",isAuthenticatedUser, deleteEnquirer);

module.exports = enquirerRouter;
