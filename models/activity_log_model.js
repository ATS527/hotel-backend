const Sequelize = require("sequelize");
const db = require("../config/db");

const Activity_Log = db.define("Activity_Log", {
  log_id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  manager_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  log: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});


module.exports = Activity_Log;