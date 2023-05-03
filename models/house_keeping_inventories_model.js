const Sequelize = require("sequelize");
const db = require("../config/db");

const House_Keeping_Inventories = db.define("House_Keeping_Inventories", {
  item_name: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  yearly_need: {
    type: Sequelize.INTEGER,
    allowNull: false,
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
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = House_Keeping_Inventories;
