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
  return Channel;
};
