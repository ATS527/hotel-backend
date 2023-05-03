const Sequelize = require("sequelize");

const db = new Sequelize("hoteldb", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;