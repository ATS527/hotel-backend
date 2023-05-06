const express = require("express");
const {
  getAllActivityLog,
  getActivityLogById,
  createActivityLog,
  updateActivityLog,
  deleteActivityLog,
} = require("../controllers/activity_log_controller");
const activityLogRouter = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

activityLogRouter.get("/getAllActivityLog", isAuthenticatedUser, authorizeRoles("admin"), getAllActivityLog);

activityLogRouter.get("/getActivityLogById/:id", isAuthenticatedUser, authorizeRoles("admin"), getActivityLogById);

activityLogRouter.post("/createActivityLog",isAuthenticatedUser, createActivityLog);

activityLogRouter.put("/updateActivityLog/:log_id",isAuthenticatedUser,authorizeRoles("admin"), updateActivityLog);

activityLogRouter.delete("/deleteActivityLog/:log_id",isAuthenticatedUser, authorizeRoles("admin"), deleteActivityLog);

module.exports = activityLogRouter;
