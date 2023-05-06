const Sequelize = require("sequelize");
const db = require("../config/db");

const Other_Inventories = db.define("Other_Inventories", {
  item_name: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  rate: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  current_quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Other_Inventories;
