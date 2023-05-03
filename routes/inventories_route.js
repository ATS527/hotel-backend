const express = require("express");
const router = express.Router();
const {
  getAllInventories,
  getInventoriesById,
  createInventory,
  updateInventory,
  deleteInventory,
} = require("../controllers/house_keeping_inventories_controller");


router.get("/", getAllInventories);


router.get("/:itemName", getInventoriesById);


router.post("/", createInventory);


router.put("/:itemName", updateInventory);


router.delete("/:itemName", deleteInventory);

module.exports = router;
