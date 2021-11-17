const express = require("express");
const dotenv = require("dotenv");

const app = express();

//CONFIGURATION FILE
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080;

//posts
app.get("/", (req, res) => {
  res.send("CRUD APPLICATION");
});

//SERVER
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
