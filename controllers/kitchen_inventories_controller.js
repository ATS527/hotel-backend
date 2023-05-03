const Kitchen_Inventories = require("../models/kitchen_inventories_model");

exports.createKitchenInventory = async (req, res) => {
  try {
    const {
      food_name,
      monthly_need,
      double,
      current_quantity,
      rate,
      unit,
      total,
    } = req.body;
    const kitchenInventory = await Kitchen_Inventories.create({
      food_name,
      monthly_need,
      double,
      current_quantity,
      rate,
      unit,
      total,
    });
    res.status(201).json({ success: true, data: kitchenInventory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Server Error" });
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
    const {
      food_name,
      monthly_need,
      double,
      current_quantity,
      rate,
      unit,
      total,
    } = req.body;
    const kitchenInventory = await Kitchen_Inventories.findByPk(id);
    if (!kitchenInventory) {
      return res
        .status(404)
        .json({ success: false, error: "Kitchen inventory not found" });
    }
    await kitchenInventory.update({
      food_name,
      monthly_need,
      double,
      current_quantity,
      rate,
      unit,
      total,
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
    await kitchenInventory.destroy();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
