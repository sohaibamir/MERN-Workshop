const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

// import routes
const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");
const studentRoutes = require("./routes/student");
const recordRoutes = require("./routes/record");

// app
const app = express();

// database
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB CONNECTED"))
  .catch((error) => console.log(`DB CONNECTION ERR ${error}`));

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// routes middleware
app.use("/api", userRoutes);
app.use("/api", bookRoutes);
app.use("/api", studentRoutes);
app.use("/api", recordRoutes);

// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
