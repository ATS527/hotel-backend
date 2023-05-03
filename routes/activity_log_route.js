const express = require("express");
const {
  getAllActivityLog,
  getActivityLogById,
  createActivityLog,
  updateActivityLog,
  deleteActivityLog,
} = require("../controllers/activity_log_controller");
const router = express.Router();
const Activity_Log = require("../models/activity_log_model");


router.get("/", getAllActivityLog);


router.get("/:id", getActivityLogById);


router.post("/", createActivityLog);


router.put("/:id", updateActivityLog);


router.delete("/:id", deleteActivityLog);

module.exports = router;
