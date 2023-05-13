const express = require("express");
const expressFileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const db = require("./config/db");
require("dotenv").config();
const path = require("path");
const managerRouter = require("./routes/manager_route");
const activityLogRouter = require("./routes/activity_log_route");
const enquirerRouter = require("./routes/enquirers_to_deal_route");
const houseKeepingInventoriesRouter = require("./routes/house_keeping_inventories_routes");
const inventoriesRouter = require("./routes/inventories_route");
const invoicesIssueRecordRouter = require("./routes/invoices_issue_record_route");
const kitchenInventoriesRouter = require("./routes/kitchen_inventories_route");
const otherInventoryRouter = require("./routes/other_inventories_route");
const photoRouter = require("./routes/photo_route");
const adminRouter = require("./routes/admin_route");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const roomRouter = require("./routes/room_route");
const staffDutyAllocationRouter = require("./routes/staff_duty_allocation_route");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(expressFileUpload());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({
  origin: ["http://127.0.0.1:3000", "http://localhost:3000", "https://server.ashahotel.in", "https://ashahotel.in"],
  credentials: true,
  sameSite: "none",
}));

app.use("/api/v2", managerRouter);
app.use("/api/v2", activityLogRouter);
app.use("/api/v2", enquirerRouter);
app.use("/api/v2", houseKeepingInventoriesRouter);
app.use("/api/v2", inventoriesRouter);
app.use("/api/v2", invoicesIssueRecordRouter);
app.use("/api/v2", kitchenInventoriesRouter);
app.use("/api/v2", otherInventoryRouter);
app.use("/api/v2", managerRouter);
app.use("/api/v2", photoRouter);
app.use("/api/v2", adminRouter);
app.use("/api/v2", roomRouter);
app.use("/api/v2", staffDutyAllocationRouter);

//express serve public folder as static
app.use(express.static(path.join(__dirname, "public")));

db.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});
