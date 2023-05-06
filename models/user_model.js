const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define("Users", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone_number: {
    type: Sequelize.BIGINT(10),
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
