const express = require("express");
const route = express.Router();

//Routes
route.get("/", (req, res) => {
  res.render("index");
});

route.get("/add-user", (req, res) => {
  res.render("add_user");
});

route.get("/update-user", (req, res) => {
  res.render("update_user");
});

module.exports = route;
