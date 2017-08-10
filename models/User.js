const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
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
    },
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    api_token: {
      type: Sequelize.STRING,
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'users'
  }
);

module.exports = User;
