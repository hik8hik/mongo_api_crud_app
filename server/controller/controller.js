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
      res
        .status(500)
        .send({
          message:
            err.message || "Error occured while creating a create operarion",
        });
    });
};

//RETRIEVE | RETURN SINGLE| ALL USERS
exports.find = (req, res) => {
    Userdb.find()
    .then(user=>{
        res.send(user)
    }).catch(err=>{
        res.status(500).send({message: err.message || "Error Retriving User Info"})
    }) 
};

//UPDATE USER BY ID
exports.update = (req, res) => {};

//DELETE USER BY ID
exports.delete = (req, res) => {};
