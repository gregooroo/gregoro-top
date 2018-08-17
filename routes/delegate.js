const { capitalizeFirstLetter } = require("../helpers/helpers");

module.exports = (req, res) => {
  res.render("delegate", {
    title: `${capitalizeFirstLetter(req.coin)} delegate details`
  });
};
