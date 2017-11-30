'use strict';
module.exports = (sequelize, DataTypes) => {
  const Games = sequelize.define('Games', {
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
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Games;
};