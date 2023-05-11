const Staff_Duty_Allocation = require("../models/staff_duty_allocation_model");

exports.createStaffDutyAllocation = async (req, res) => {
    try {
        const newStaffDutyAllocation = await Staff_Duty_Allocation.create(req.body);
        res.status(201).json({
            success: true,
            newStaffDutyAllocation
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}
