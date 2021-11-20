const mongoose = require("mongoose");

var schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  status: {
    type: String,
  },
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
