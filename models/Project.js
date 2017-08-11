const Sequelize = require('sequelize');
const db = require('../db');

const Project = db.define('Project', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    }
  },
  {
    timestamps: true,
    tableName: 'projects'
  }
);

module.exports = Project;
