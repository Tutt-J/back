const express = require("express");
const db = require("./app/models/index.js");
var cors = require("cors");

const app = express();

db.sequelize
  .authenticate()
  .then(() => console.log("Database connected ..."))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "http://localhost:8080", // Allow requests from your frontend origin
  })
);

app.use(express.json());

app.get("/api", (req, res) => {
  res.json("welcome to our server");
});

module.exports = app;
