const Sequelize = require("sequelize");
const db = require("../config/db");

// Define the database tables using Sequelize models
const Rooms = db.define("Rooms", {
  room_id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Rooms;
