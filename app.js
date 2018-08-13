const path = require("path");
const express = require("express");
const routes = require("./routes");

const app = express();

app.set("views", "views");
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);

module.exports = app;
