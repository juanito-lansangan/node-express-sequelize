'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    user_type: DataTypes.STRING,
    is_active: DataTypes.INTEGER,
    user_id: { type: DataTypes.STRING, primaryKey: true},
    api_token: DataTypes.INTEGER,
  }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'users'
  });

};
