const path = require("path");
const express = require("express");
const pug = require("pug");

const app = express();

app.set("views", "/views");
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
