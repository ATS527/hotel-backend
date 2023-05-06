const { Inventories } = require("../models/inventories_model");

exports.getAllInventories = async (req, res) => {
  try {
    const inventories = await Inventories.findAll();
    res.status(200).json({ success: true, data: inventories });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

exports.getInventoriesById = async (req, res) => {
  try {
    const inventory = await Inventories.findByPk(req.params.inventory_id);
    if (!inventory) {
      return res
        .status(404)
        .json({ success: false, error: "Inventory item not found" });
    }
    res.status(200).json({ success: true, data: inventory });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

exports.createInventory = async (req, res) => {
  try {
    const { inventory_id } = req.body;
    const inventoryExists = await Inventories.findByPk(inventory_id);
    if (inventoryExists) {
      return res
        .status(400)
        .json({ success: false, error: "Inventory item already exists" });
    }
    const newInventory = await Inventories.create(req.body);
    res.status(201).json({ success: true, data: newInventory });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

exports.updateInventory = async (req, res) => {
  try {
    const { inventory_id } = req.params;
    const inventory = await Inventories.findByPk(inventory_id);
    if (!inventory) {
      return res
        .status(404)
        .json({ success: false, error: "Inventory item not found" });
    }
    await inventory.update(req.body);
    res.status(200).json({ success: true, data: inventory });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

exports.deleteInventory = async (req, res) => {
  try {
    const { inventory_id } = req.params;
    const inventory = await Inventories.findByPk(inventory_id);
    if (!inventory) {
      return res
        .status(404)
        .json({ success: false, error: "Inventory item not found" });
    }
    await inventory.destroy();
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
