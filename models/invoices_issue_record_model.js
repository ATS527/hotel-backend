const Sequelize = require("sequelize");
const db = require("../config/db");

const Invoices_Issues_Records = db.define("Invoices_Issues_Records", {
  invoice_no: {
    type: Sequelize.BIGINT,
    primaryKey: true,
  },
  customer_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  invoice_issue_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  credit_amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  debit_amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Invoices_Issues_Records;
