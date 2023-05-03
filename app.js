const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
require("dotenv").config();
const path = require("path");

const app = express();


app.use(bodyParser.json());



const enquirersRoutes = require("./routes/enquirers");
app.use("/enquirers", enquirersRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

//express serve public folder as static
app.use(express.static(path.join(__dirname, "public")));

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});
