const express = require("express");
const router = express.Router();
const {
  findAllInvoice,
  findOneInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} = require("../controllers/invoices_issue_record_controller");


router.get("/", findAllInvoice);


router.get("/:invoice_no", findOneInvoice);


router.post("/", createInvoice);


router.put("/:invoice_no", updateInvoice);


router.delete("/:invoice_no", deleteInvoice);

module.exports = router;
