const express = require("express");
const route = express.Router();

const services = require("../services/render");

/**
 * @Description Root Route
 * @method GET/
 */

//Routes
route.get("/", services.homeRoutes);

route.get("/add-user", (req, res) => {
  res.render("add_user");
});

route.get("/update-user", (req, res) => {
  res.render("update_user");
});

module.exports = route;
