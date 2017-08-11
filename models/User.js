const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('User', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    user_type: {
      type: Sequelize.STRING,
    },
    is_active: {
      type: Sequelize.INTEGER,
    }
  },
  {
    timestamps: true,
    tableName: 'users'
  }
);

module.exports = User;
