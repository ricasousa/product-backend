'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  User.add = (firstName, lastName, email) => {
    return User.create({ firstName: firstName, lastName: lastName, email: email });
  };

  return User;
};
