const Sequelize = require("sequelize");
const db = require("../config/db");

const Enquirers_To_Deal = db.define("Enquirers_To_Deal", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  company_name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  booking_date: {
    type: Sequelize.DATEONLY,
  },
  num_of_people: {
    type: Sequelize.INTEGER,
  },
  num_of_rooms: {
    type: Sequelize.INTEGER,
  },
  description: {
    type: Sequelize.TEXT,
  },
  status: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Enquirers_To_Deal;
