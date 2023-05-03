const Sequelize = require("sequelize");
const db = require("../config/db");

const Inventories = db.define("Inventories", {
  inventory_id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Inventories;
