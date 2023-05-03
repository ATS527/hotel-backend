const Activity_Log = require("../models/activity_log_model");

exports.getAllActivityLog = async (req, res) => {
  try {
    const logs = await Activity_Log.findAll();
    res.json({ success: true, data: logs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.getActivityLogById = async (req, res) => {
  try {
    const log = await Activity_Log.findByPk(req.params.id);
    if (!log) {
      res.status(404).json({ success: false, message: "Log not found" });
    } else {
      res.json({ success: true, data: log });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.createActivityLog = async (req, res) => {
  try {
    const log = await Activity_Log.create(req.body);
    res.status(201).json({ success: true, data: log });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.updateActivityLog = async (req, res) => {
  try {
    const log = await Activity_Log.findByPk(req.params.id);
    if (!log) {
      res.status(404).json({ success: false, message: "Log not found" });
    } else {
      await log.update(req.body);
      res.json({ success: true, data: log });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.deleteActivityLog = async (req, res) => {
  try {
    const log = await Activity_Log.findByPk(req.params.id);
    if (!log) {
      res.status(404).json({ success: false, message: "Log not found" });
    } else {
      await log.destroy();
      res.json({ success: true, message: "Log deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
