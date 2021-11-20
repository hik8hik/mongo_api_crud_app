const express = require("express");
const route = express.Router();

const services = require("../services/render");

/**
 * @Description Root Route
 * @method GET/
 */

//Routes
route.get("/", services.homeRoutes);
route.get("/", services.add_user);
route.get("/", services.update_user);

module.exports = route;
