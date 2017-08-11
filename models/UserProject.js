const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./User');
const Project = require('./Project');

const UserProject = db.define('UserProject', {
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
    project_id: {
      type: Sequelize.INTEGER,
      references: {
       model: Project,
       // This is the column name of the referenced model
       key: 'id',
      }
    },
  },
  {
    timestamps: true,
    tableName: 'users_projects'
  }
);

module.exports = UserProject;
