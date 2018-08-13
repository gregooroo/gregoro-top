const Router = require("express").Router();

Router.get("/", require("./home"));

module.exports = Router;
