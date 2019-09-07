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
    var nameArray = []
    db.Channel.findAll({}).then(function(data) {
      for (var i = 0; i < data.length; i++) {
        var name = data[i].dataValues.name;
        nameArray.push(name)
      };
      console.log(nameArray)
      res.render("channels", {
        messages: nameArray
      })
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
