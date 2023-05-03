const House_Keeping_Inventories = require("../models/house_keeping_inventories_model");


exports.getAllInventories = async (req, res) => {
  try {
    const inventories = await House_Keeping_Inventories.findAll();
    res.json({ success: true, data: inventories });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


exports.getInventoryByItemName = async (req, res) => {
  const itemName = req.params.itemName;

  try {
    const inventory = await House_Keeping_Inventories.findByPk(itemName);
    if (!inventory) {
      res.status(404).json({ success: false, message: "Inventory not found" });
    } else {
      res.json({ success: true, data: inventory });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


exports.addInventory = async (req, res) => {
  const { item_name, yearly_need, quantity, rate, total, current_quantity } =
    req.body;

  try {
    const newInventory = await House_Keeping_Inventories.create({
      item_name,
      yearly_need,
      quantity,
      rate,
      total,
      current_quantity,
      updated_at: new Date(),
    });
    res.json({
      success: true,
      message: "Inventory added successfully",
      data: newInventory,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


exports.updateInventory = async (req, res) => {
  const itemName = req.params.itemName;
  const { yearly_need, quantity, rate, total, current_quantity } = req.body;

  try {
    const inventory = await House_Keeping_Inventories.findByPk(itemName);
    if (!inventory) {
      res.status(404).json({ success: false, message: "Inventory not found" });
    } else {
      await inventory.update({
        yearly_need,
        quantity,
        rate,
        total,
        current_quantity,
        updated_at: new Date(),
      });
      res.json({ success: true, message: "Inventory updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


exports.deleteInventory = async (req, res) => {
  const itemName = req.params.itemName;

  try {
    const inventory = await House_Keeping_Inventories.findByPk(itemName);
    if (!inventory) {
      res.status(404).json({ success: false, message: "Inventory not found" });
    } else {
      await inventory.destroy();
      res.json({ success: true, message: "Inventory deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
