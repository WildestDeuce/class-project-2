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
<<<<<<< HEAD
    db.Channel.findAll({
      where: {
        name: db.Messages.channel_name
      }
    }).then(function(dbChannels) {
      res.render("channels")
      console.log(dbChannels);
=======
    db.Channel.findAll({}).then(function(data) {
      console.log(data)
      res.render("channels", {
        messages: data
      })
>>>>>>> 62d7c8257bd2ef8a23c230555eb11e00f29f0969
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
