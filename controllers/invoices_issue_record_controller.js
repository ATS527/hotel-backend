const { Op } = require("sequelize");
const Invoices_Issues_Records = require("../models/invoices_issue_record_model");


exports.createInvoice = async (req, res) => {
  try {
    const invoiceIssueRecord = await Invoices_Issues_Records.create(req.body);
    res.status(201).json({ success: true, data: invoiceIssueRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


exports.findAllInvoice = async (req, res) => {
  try {
    // const { customer_name } = req.query;
    // const condition = customer_name
    //   ? { customer_name: { [Op.iLike]: `%${customer_name}%` } }
    //   : null;
    const invoiceIssueRecords = await Invoices_Issues_Records.findAll();
    res.status(200).json({ success: true, data: invoiceIssueRecords });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


exports.findOneInvoice = async (req, res) => {
  try {
    const { invoice_no } = req.params;
    const invoiceIssueRecord = await Invoices_Issues_Records.findByPk(
      invoice_no
    );
    if (invoiceIssueRecord) {
      res.status(200).json({ success: true, data: invoiceIssueRecord });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Invoice issue record not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


exports.updateInvoice = async (req, res) => {
  try {
    const { invoice_no } = req.params;
    const { customer_name, issue_date, total_amount, credit_amount, debit_amount } =
      req.body;

    const invoiceRecord = await Invoices_Issues_Records.findByPk(invoice_no);

    if (!invoiceRecord) {
      return res.status(404).json({ success: false, message: "Invoice issue record not found" });
    }

    const updatedInvoiceIssueRecord = await Invoices_Issues_Records.update(
      { customer_name, issue_date, total_amount, credit_amount, debit_amount },
      { returning: true, where: { invoice_no } }
    );

    const newInvoiceRecord = await Invoices_Issues_Records.findByPk(invoice_no);

    res.status(200).json({ success: true, data: newInvoiceRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


exports.deleteInvoice = async (req, res) => {
  try {
    const { invoice_no } = req.params;
    const rowsDeleted = await Invoices_Issues_Records.destroy({
      where: { invoice_no },
    });
    if (rowsDeleted === 1) {
      res.status(200).json({
        success: true,
        message: "Invoice issue record deleted successfully",
      });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Invoice issue record not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
