const { coinDetails } = require("./../config.json");

module.exports = (req, res) => {
  res.render("home", {
    title: "Home page",
    coinDetails
  });
};
