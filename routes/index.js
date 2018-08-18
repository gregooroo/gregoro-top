const Router = require("express").Router();

Router.get("/", require("./home"));
Router.get("/empty", require("./empty"));

module.exports = Router;
