const Sequelize = require("sequelize");
const db = require("../config/db");

const Enquirers_To_Deal = db.define("Enquirers_To_Deal", {
  name: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  inquire: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Enquirers_To_Deal;
