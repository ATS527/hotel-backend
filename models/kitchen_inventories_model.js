const Sequelize = require("sequelize");
const db = require("../config/db");

const Kitchen_Inventories = db.define("Kitchen_Inventories", {
  food_name: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  monthly_need: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  double: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  current_quantity: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  rate: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  unit: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Kitchen_Inventories;
