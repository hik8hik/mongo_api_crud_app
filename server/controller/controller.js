var Userdb = require("../model/model");

//CREATE AND SAVE NEW USER
exports.create = (req, res) => {
  //VALIDATE REQUEST
  if (!req.body) {
    res.status(400).send({ messgae: "Content Cannot Be Empty" });
    return;
  }
  //NEW USER
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //SAVE USER IN DB
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error occured while creating a create operarion",
      });
    });
};

//RETRIEVE | RETURN SINGLE| ALL USERS
exports.find = (req, res) => {
  if (req.query.id) {
    req.query.id;
    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `No user with id:${id} Found` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {res.status(500).send({message: `Error retriving user with the id ${id}`})});
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || "Error Retriving User Info" });
      });
  }
};

//UPDATE USER BY ID
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot update user with ${id}. User not found` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Updating User" });
    });
};

//DELETE USER BY ID
exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot delete user with ${id}. User not found` });
      } else {
        res.send({ message: "user was deleted successfuly" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Deleting User ...." + id });
    });
};
