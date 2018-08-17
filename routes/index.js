const Router = require("express").Router();
const validateCoin = require("../middleware/validateCoin");

Router.get("/", require("./home"));
Router.get("/delegate/:coin", validateCoin, require("./delegate"));
Router.get("/empty", require("./empty"));

module.exports = Router;
