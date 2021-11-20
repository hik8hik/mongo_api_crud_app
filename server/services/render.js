const axios = require("axios");

exports.homeRoutes = (req, res) => {
  //MAKE A GET REQUEST TO THE API USERS
  axios.get("http://localhost:3000/api/users").then(function (response) {
    res.render("index", { users: response.data });
  });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  res.render("update_user");
};
