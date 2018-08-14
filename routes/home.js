const coinDetails = {
  oxycoin: {
    poolWebsite: "https://pool.oxycoin.gregoro.top",
    delegate: "/delegate/oxycoin",
    mainWebsite: "https://oxycoin.io",
    chat: "https://oxycoin.slack.com"
  },
  shift: {
    poolWebsite: "https://pool.shiftnrg.gregoro.top",
    delegate: "/delegate/shift",
    mainWebsite: "https://www.shiftnrg.org",
    chat: "https://shiftnrg.ryver.com/application/login"
  }
};

module.exports = (req, res) => {
  res.render("home", {
    title: "Home page",
    coinDetails
  });
};
