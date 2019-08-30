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

//app.get("/channels/:name") req.params.name
//res.render("channels", {msg:dbChannels})
  // Load Channel page and pass in an Channel by id
  app.get("/channels", function(req, res) {
    db.Channel.findAll({
      where: {
        name: db.Messages.channel_name
      }
    }).then(function(dbChannels) {
      res.render("channels")
      console.log(dbChannels);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
