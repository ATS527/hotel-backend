const express = require("express");
const inventoriesRouter = express.Router();
const {
  getAllInventories,
  getInventoriesById,
  createInventory,
  updateInventory,
  deleteInventory,
} = require("../controllers/inventories_controller");

const {
  isAuthenticatedUser
} = require("../middleware/auth")

inventoriesRouter.get("/getAllInventories", isAuthenticatedUser,getAllInventories);


inventoriesRouter.get("/getInventoryById/:inventory_id", getInventoriesById);


inventoriesRouter.post("/createInventory",isAuthenticatedUser, createInventory);


inventoriesRouter.put("/updateInventory/:inventory_id", isAuthenticatedUser,updateInventory);


inventoriesRouter.delete("/deleteInventory/:inventory_id",isAuthenticatedUser, deleteInventory);

module.exports = inventoriesRouter;
