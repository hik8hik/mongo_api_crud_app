const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");
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

//API
route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)

module.exports = route;
