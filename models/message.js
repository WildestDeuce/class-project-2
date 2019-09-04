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
      });
      Message.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Message.belongsTo(models.Channel, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Message;
}

