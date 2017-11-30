'use strict';

module.exports = function (sequelize, DataTypes) {
  var Games = sequelize.define('Games', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          message: 'input name'
        }
      }
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    }
  });
  return Games;
};