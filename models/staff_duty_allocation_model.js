
const Sequelize = require("sequelize");
const db = require("../config/db");

const Staff_Duty_Allocation = db.define("Staff_Duty_Allocation", {
  staff_id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  time: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  salary: {
    type: Sequelize.FLOAT(10, 2),
    allowNull: false,
  },
});

module.exports = Staff_Duty_Allocation;
