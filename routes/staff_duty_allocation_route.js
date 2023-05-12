const staffDutyAllocationRouter = require('express').Router();

const { createStaffDutyAllocation, getStaffDutyAllocations, getStaffDutyAllocation, updateStaffDutyAllocation, deleteStaffDutyAllocation } = require('../controllers/staff_duty_allocation_controller');

const { isAuthenticatedUser} = require("../middleware/auth");

staffDutyAllocationRouter.post('/createStaffDutyAllocation',isAuthenticatedUser, createStaffDutyAllocation);

staffDutyAllocationRouter.get("/getStaffDutyAllocations",isAuthenticatedUser, getStaffDutyAllocations);

staffDutyAllocationRouter.get("/getStaffDutyAllocation/:id", isAuthenticatedUser,getStaffDutyAllocation);

staffDutyAllocationRouter.put("/updateStaffDutyAllocation/:id",isAuthenticatedUser, updateStaffDutyAllocation);

staffDutyAllocationRouter.delete("/deleteStaffDutyAllocation/:id",isAuthenticatedUser, deleteStaffDutyAllocation);

module.exports = staffDutyAllocationRouter;