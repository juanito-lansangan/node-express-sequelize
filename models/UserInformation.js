const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./User');

const UserInformation = db.define(
  'UserInformation',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
       model: User,
       // This is the column name of the referenced model
       key: 'id',
      }
    },
    first_name: {
      type: Sequelize.STRING,
    },
    middle_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'users_information'
  }
);

module.exports = UserInformation;
