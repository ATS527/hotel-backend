const Staff_Duty_Allocation = require("../models/staff_duty_allocation_model");
const Activity_Log = require("../models/activity_log_model");
const {nanoid} = require("nanoid")

exports.createStaffDutyAllocation = async (req, res) => {
    try {
        const newStaffDutyAllocation = await Staff_Duty_Allocation.create(req.body);

        const activityLog = await Activity_Log.create({
            log_id: nanoid(),
            manager_id: req.user.id,
            log: `Staff Duty Allocation created with data ${JSON.stringify(req.body)}`
          });

        res.status(201).json({
            success: true,
            newStaffDutyAllocation
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

exports.getStaffDutyAllocations = async (req, res) => {
    try {
        const staffDutyAllocations = await Staff_Duty_Allocation.findAll();
        res.status(200).json({
            success: true,
            staffDutyAllocations
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

exports.getStaffDutyAllocation = async (req, res) => {
    try {
        const staffDutyAllocation = await Staff_Duty_Allocation.findByPk(req.params.id);

        if (!staffDutyAllocation) {
            return res.status(404).json({ success: false, message: "Staff Duty Allocation not found" });
        }

        res.status(200).json({
            success: true,
            staffDutyAllocation
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

exports.updateStaffDutyAllocation = async (req, res) => {
    try {
        const staffDutyAllocation = await Staff_Duty_Allocation.findByPk(req.params.id);
        await staffDutyAllocation.update(req.body);

        const activityLog = await Activity_Log.create({
            log_id: nanoid(),
            manager_id: req.user.id,
            log: `Staff Duty Allocation ${req.params.id} updated with data ${JSON.stringify(req.body)}`
          });

        res.status(200).json({
            success: true,
            staffDutyAllocation
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

exports.deleteStaffDutyAllocation = async (req, res) => {
    try {
        const staffDutyAllocation = await Staff_Duty_Allocation.findByPk(req.params.id);
        await staffDutyAllocation.destroy();

        const activityLog = await Activity_Log.create({
            log_id: nanoid(),
            manager_id: req.user.id,
            log: `Staff Duty Allocation ${req.params.id} deleted`
          });

        res.status(200).json({
            success: true,
            message: "The staff duty allocation has been deleted"
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}