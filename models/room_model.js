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
  },
  price1: {
    type: Sequelize.FLOAT,
  },
  price2: {
    type: Sequelize.FLOAT,
  },
  price3: {
    type: Sequelize.FLOAT,
  },
  price4: {
    type: Sequelize.FLOAT,
  },
  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Rooms;
