const Enquirers_To_Deal = require("../models/enquirers_to_deal_model");


exports.getAllEnquirers = async (req, res) => {
  try {
    const enquirers = await Enquirers_To_Deal.findAll();
    res.json({ success: true, data: enquirers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


exports.getEnquirer = async (req, res) => {
  try {
    const enquirer = await Enquirers_To_Deal.findByPk(req.params.name);
    if (!enquirer) {
      res.status(404).json({ success: false, message: "Enquirer not found" });
    } else {
      res.json({ success: true, data: enquirer });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


exports.createEnquirer = async (req, res) => {
  try {
    const enquirer = await Enquirers_To_Deal.create(req.body);
    res.status(201).json({ success: true, data: enquirer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


exports.updateEnquirer = async (req, res) => {
  try {
    const enquirer = await Enquirers_To_Deal.findByPk(req.params.name);
    if (!enquirer) {
      res.status(404).json({ success: false, message: "Enquirer not found" });
    } else {
      await enquirer.update(req.body);
      res.json({ success: true, data: enquirer });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


exports.deleteEnquirer = async (req, res) => {
  try {
    const enquirer = await Enquirers_To_Deal.findByPk(req.params.name);
    if (!enquirer) {
      res.status(404).json({ success: false, message: "Enquirer not found" });
    } else {
      await enquirer.destroy();
      res.json({ success: true, message: "Enquirer deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
