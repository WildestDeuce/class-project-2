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

  Channel.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Channel.hasMany(models.Message, {
      onDelete: "cascade"
    });
  };
  
  return Channel;
};
