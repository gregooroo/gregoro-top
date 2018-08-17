const { coinDetails } = require("../config.json");

const coins = Object.keys(coinDetails);

module.exports = (req, res, next) => {
  const { coin } = req.params;
  if (!coins.includes(coin)) return res.status(404).redirect("/empty");
  req.coin = coin;
  next();
};
