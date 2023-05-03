const express = require("express");
const router = express.Router();
const enquirersController = require("../controllers/enquirersController");


router.get("/", enquirersController.getAllEnquirers);


router.get("/:name", enquirersController.getEnquirer);


router.post("/", enquirersController.createEnquirer);


router.put("/:name", enquirersController.updateEnquirer);


router.delete("/:name", enquirersController.deleteEnquirer);

module.exports = router;
