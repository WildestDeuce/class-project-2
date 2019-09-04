var db = require("../models");

module.exports = function(app) {
  // Get all Channels
  app.get("/api/Channels", function(req, res) {
    db.Channel.findAll({}).then(function(dbChannels) {
      res.json(dbChannels);
    });
  });
//Create new Message
  app.get("/api/messages", function(req, res) {
    db.Message.findAll({}).then(function(dbMessages) {
      res.json(dbMessages);
    });
  });

  // Create a new Channel
  app.post("/api/Channels", function(req, res) {
    db.Channel.create(req.body).then(function(dbChannel) {
      res.json(dbChannel);
    });
  });

  // Delete an Channel by id
  app.delete("/api/Channels/:id", function(req, res) {
    db.Channel.destroy({ where: { id: req.params.id } }).then(function(dbChannel) {
      res.json(dbChannel);
    });
  });
};
