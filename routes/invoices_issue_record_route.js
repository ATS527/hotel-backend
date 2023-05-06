const express = require("express");
const invoicesIssueRecordRouter = express.Router();
const {
  findAllInvoice,
  findOneInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} = require("../controllers/invoices_issue_record_controller");

const { isAuthenticatedUser } = require("../middleware/auth");


invoicesIssueRecordRouter.get("/findAllInvoice", findAllInvoice);


invoicesIssueRecordRouter.get("/findOneInvoice/:invoice_no", findOneInvoice);


invoicesIssueRecordRouter.post("/createInvoice", createInvoice);


invoicesIssueRecordRouter.put("/updateInvoice/:invoice_no", updateInvoice);


invoicesIssueRecordRouter.delete("/deleteInvoice/:invoice_no", deleteInvoice);

module.exports = invoicesIssueRecordRouter;
