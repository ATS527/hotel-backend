const Kitchen_Inventories = require("../models/kitchen_inventories_model");
const {nanoid} = require("nanoid");
const Activity_Log = require("../models/activity_log_model");

exports.createKitchenInventory = async (req, res) => {
  try {
    const kitchenInventory = await Kitchen_Inventories.create(req.body);

    const activityLog = await Activity_Log.create({
      log_id: nanoid(),
      manager_id: req.user.id,
      log: `Kitchen Inventory created with data ${JSON.stringify(req.body)}`
    });

  
    res.status(201).json({ success: true, data: kitchenInventory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getKitchenInventories = async (req, res) => {
  try {
    const kitchenInventories = await Kitchen_Inventories.findAll();
    res.status(200).json({ success: true, data: kitchenInventories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

exports.getKitchenInventoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const kitchenInventory = await Kitchen_Inventories.findByPk(id);
    if (!kitchenInventory) {
      return res
        .status(404)
        .json({ success: false, error: "Kitchen inventory not found" });
    }
    res.status(200).json({ success: true, data: kitchenInventory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

exports.updateKitchenInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const kitchenInventory = await Kitchen_Inventories.findByPk(id);
    if (!kitchenInventory) {
      return res
        .status(404)
        .json({ success: false, error: "Kitchen inventory not found" });
    }
    const updatedKitchenInventory = await kitchenInventory.update(req.body);
    const activityLog = await Activity_Log.create({
      log_id: nanoid(),
      manager_id: req.user.id,
      log: `Kitchen Inventory ${id} updated with data ${JSON.stringify(req.body)}`
    });
    res.status(200).json({ success: true, data: kitchenInventory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

exports.deleteKitchenInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const kitchenInventory = await Kitchen_Inventories.findByPk(id);
    if (!kitchenInventory) {
      return res
        .status(404)
        .json({ success: false, error: "Kitchen inventory not found" });
    }

    const activityLog = await Activity_Log.create({
      log_id: nanoid(),
      manager_id: req.user.id,
      log: `Kitchen Inventory ${id} deleted`
    });

    await kitchenInventory.destroy();
    res.status(200).json({ success: true, data: "Kitchen inventory is deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
