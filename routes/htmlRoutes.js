var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Channel.findAll({}).then(function(dbChannels) {
      res.render("index", {
        msg: "Welcome To",
        Channels: dbChannels
      });
    });
  });

  // Load Channel page and pass in an Channel by id
  app.get("/channels/:name", function(req, res) {
    db.Channel.findAll({
      where: {
        name: req.params.name
      }
    }).then(function(data) {
      console.log(data)
      res.render("channels", {
        messages: data
      })
    });
  });

  app.get("/channels", function(req, res) {
    db.Channel.findAll({}).then(function(data) {
      console.log(data)
      res.render("channels", {
        messages: data
      })
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
