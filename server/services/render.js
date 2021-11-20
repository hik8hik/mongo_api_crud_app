exports.homeRoutes = (req, res) => {
  res.render("index", {users: "New Data"});
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  res.render("update_user");
};
