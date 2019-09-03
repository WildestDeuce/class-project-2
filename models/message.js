var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        channel_name: DataTypes.STRING,
        message: DataTypes.TEXT
      })
    return Message;
}

