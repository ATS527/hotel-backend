const express = require("express");
const router = express.Router();
const {
  getKitchenInventories,
  getKitchenInventoryById,
  createKitchenInventory,
  updateKitchenInventory,
  deleteKitchenInventory,
} = require("../controllers/kitchen_inventories_controller");


router.get("/", getKitchenInventories);


router.get("/:foodName", getKitchenInventoryById);


router.post("/", createKitchenInventory);


router.put("/:foodName", updateKitchenInventory);


router.delete("/:foodName", deleteKitchenInventory);

module.exports = router;
