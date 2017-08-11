const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./User');
const UserProject = require('./UserProject');

const UserProjectAccomplish = db.define('UserProjectAccomplish', {
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
    user_project_id: {
      type: Sequelize.INTEGER,
      references: {
       model: UserProject,
       // This is the column name of the referenced model
       key: 'id',
      }
    },
    task_accomplished: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: true,
    tableName: 'users_projects_accomplishments'
  }
);

module.exports = UserProjectAccomplish;
