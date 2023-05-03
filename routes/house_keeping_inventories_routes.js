const express = require("express");
const router = express.Router();
const {
  getAllInventories,
  getInventoryByItemName,
  addInventory,
  updateInventory,
  deleteInventory,
} = require("../controllers/house_keeping_inventories_controller");


router.get("/", getAllInventories);


router.get("/:itemName", getInventoryByItemName);


router.post("/", addInventory);


router.put("/:itemName", updateInventory);


router.delete("/:itemName", deleteInventory);

module.exports = router;
