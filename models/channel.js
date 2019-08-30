var Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  var Channel = sequelize.define("Channel", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
  });
  var Messages = sequelize.define("Message", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    channel_name: DataTypes.STRING,
    message: DataTypes.TEXT
  })
  return Channel;
};
