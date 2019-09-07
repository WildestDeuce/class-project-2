var db = require("../models");

module.exports = function(app) {
  // Get all Channels
  app.get("/api/Channels", function(req, res) {
    db.Channel.findAll({
      include: [db.Message]
    }).then(function(dbChannels) {
      res.json(dbChannels);
    });
  });
//Create new Message
  app.get("/api/messages/:name", function(req, res) {
    db.Message.findAll({
      where: {
        channel_name: req.params.name
      }
    }).then(function(dbMessages) {
      res.json(dbMessages);
    });
  });
  // Get all Messages
  app.get("/api/messages", function(req, res) {
    db.Message.findAll({}).then(function(dbMessages) {
      res.json(dbMessages);
    });
  });

  // Create a new Channel
  app.post("/api/messages", function(req, res) {
    console.log(req)
    db.Message.create({
      channel_name: req.body.channel_name,
      message: req.body.message
    }).then(function(dbMessage) {
      res.json(dbMessage);
    });
  });
//   app.post("/api/login", function(req, res) {
//     console.log("hey");
//     res.redirect(307, "/channels");
//   });

  // Delete an Channel by id
  app.delete("/api/Channels/:id", function(req, res) {
    db.Channel.destroy({ where: { id: req.params.id } }).then(function(dbChannel) {
      res.json(dbChannel);
    });
  });
};
