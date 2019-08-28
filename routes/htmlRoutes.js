var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Channel.findAll({}).then(function(dbChannels) {
      res.render("index", {
        msg: "Welcome!",
        Channels: dbChannels
      });
    });
  });

  // Load Channel page and pass in an Channel by id
  app.get("/Channel/:id", function(req, res) {
    db.Channel.findOne({ where: { id: req.params.id } }).then(function(dbChannels) {
      res.render("Channel", {
        Channel: dbChannels
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
