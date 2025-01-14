const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user-route");
const captainRoutes = require("./routes/captain-route");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connect = require("./db/db");
connect();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;
