const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

const app = express();

//CONFIGURATION FILE
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//LOG REQUESTS
app.use(morgan("tiny"));

//PARSE
app.use(express.urlencoded({ extended: true })); // To parse the incoming requests with JSON payloads

/**
 * 
 * 
 // calling body-parser to handle the Request Object from POST requests
 // parse application/json, basically parse incoming Request Object as a JSON Object 
 app.use(express.json());
 // parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
 app.use(express.urlencoded({ extended: false }));
 // combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
 app.use(express.urlencoded({ extended: true }));
 */

// SET VIEW ENGINE
app.set("view engine", "ejs");
//app.set("views", path.resolve(__dirname, "views/ejs"));

//LOAD ASSETS
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//posts
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/add-user", (req, res) => {
  res.render("add_user");
});

//SERVER
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
