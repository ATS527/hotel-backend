const express = require("express");
const houseKeepingInventoriesRouter = express.Router();
const {
  getAllInventories,
  getInventoryByItemName,
  createInventory,
  updateInventory,
  deleteInventory,
} = require("../controllers/house_keeping_inventories_controller");

const {
  isAuthenticatedUser,
} = require("../middleware/auth");


houseKeepingInventoriesRouter.get("/getAllHouseKeepingInventory", isAuthenticatedUser, getAllInventories);


houseKeepingInventoriesRouter.get("/getHouseKeepingInventoryByItemName/:itemName",getInventoryByItemName);


houseKeepingInventoriesRouter.post("/createHouseKeepingInventory",isAuthenticatedUser, createInventory);


houseKeepingInventoriesRouter.put("/updateHouseKeepingInventory/:itemName",isAuthenticatedUser, updateInventory);


houseKeepingInventoriesRouter.delete("/deleteHouseKeepingInventory/:itemName",isAuthenticatedUser, deleteInventory);

module.exports = houseKeepingInventoriesRouter;
