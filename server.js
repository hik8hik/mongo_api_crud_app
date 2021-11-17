const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

//CONFIGURATION FILE
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//LOG REQUESTS
app.use(morgan("tiny"));

//PARSE
app.use(express.json()); // To parse the incoming requests with JSON payloads

//posts
app.get("/", (req, res) => {
  res.send("CRUD APPLICATION");
});

//SERVER
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
