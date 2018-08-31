const Router = require("express").Router();
const validateCoin = require("../middleware/validateCoin");
const validateNet = require("../middleware/validateNet");

Router.get("/", require("./home"));
Router.get("/delegate/:coin", validateCoin, require("./delegate"));
Router.get(
  "/delegate/:coin/spec/:net",
  validateCoin,
  validateNet,
  require("./serverSpec")
);
Router.get("/empty", require("./empty"));

module.exports = Router;
