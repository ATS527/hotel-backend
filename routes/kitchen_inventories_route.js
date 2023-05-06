const express = require("express");
const kitchenInventoriesRouter = express.Router();
const {
  getKitchenInventories,
  getKitchenInventoryById,
  createKitchenInventory,
  updateKitchenInventory,
  deleteKitchenInventory,
} = require("../controllers/kitchen_inventories_controller");
const { isAuthenticatedUser } = require("../middleware/auth");


kitchenInventoriesRouter.get("/getKitchenInventories", getKitchenInventories);


kitchenInventoriesRouter.get("/getKitchenInventoryById/:id", getKitchenInventoryById);


kitchenInventoriesRouter.post("/createKitchenInventory",isAuthenticatedUser, createKitchenInventory);


kitchenInventoriesRouter.put("/updateKitchenInventory/:id",isAuthenticatedUser, updateKitchenInventory);


kitchenInventoriesRouter.delete("/deleteKitchenInventory/:id",isAuthenticatedUser ,deleteKitchenInventory);

module.exports = kitchenInventoriesRouter;
