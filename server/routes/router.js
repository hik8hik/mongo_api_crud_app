const express = require("express");
const route = express.Router();

const services = require("../services/render");

/**
 * @Description Root Route
 * @method GET/
 */

//Routes
route.get("/", services.homeRoutes);

/**
 * @Description add user
 * @method GET/ add_user
 */
route.get("/add-user", services.add_user);

/**
 * @Description update user
 * @method GET/ update_user
 */
route.get("/update-user", services.update_user);

module.exports = route;
