const availableNets = ["testnet", "mainnet"];

module.exports = (req, res, next) => {
  const { net } = req.params;
  if (!availableNets.includes(net)) return res.redirect("/empty");
  next();
};
