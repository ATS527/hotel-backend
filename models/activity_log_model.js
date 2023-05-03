const Sequelize = require("sequelize");
const db = require("../config/db");
const Managers = require("./user_model");

const Activity_Log = db.define("Activity_Log", {
  log_id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  manager_id: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Managers,
      key: "manager_id",
    },
  },
  log: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

Activity_Log.belongsTo(Managers, { foreignKey: "manager_id" });

module.exports = Activity_Log;
