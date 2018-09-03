const { capitalizeFirstLetter } = require("../helpers/helpers");
const { serverDetails } = require("../config.json");

module.exports = (req, res) => {
  res.render("serverSpec", {
    title: `${capitalizeFirstLetter(req.coin)} mainnet servers details`,
    coin: req.coin,
    net: req.net,
    serverDetails: serverDetails[req.coin][req.net]
  });
};
