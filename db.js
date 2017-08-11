'use strict';

const Sequelize = require('sequelize');
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/config/config.json')[env];

const db = new Sequelize(config.database, config.username, config.password, config);

module.exports = db;

// We'll define associations after we import them here
const User = require('./models/User');
const UserInformation = require('./models/UserInformation');
const Project = require('./models/Project');
const UserProject = require('./models/UserProject');
const UserProjectAccomplish = require('./models/UserProjectAccomplish');

// Defining Relationships
User.hasOne(UserInformation, {as: 'information', foreignKey: 'user_id'});
User.hasMany(UserProject, {as: 'projects', foreignKey: 'user_id'});
Project.hasMany(UserProject, {as: 'users', foreignKey: 'project_id'});
UserProject.hasMany(UserProjectAccomplish, {as: 'accomplishments', foreignKey: 'user_project_id'});
UserProject.belongsTo(Project, {as: 'project', foreignKey: 'project_id'});
// using pivot table
User.belongsToMany(Project, {as: 'userProjects', through: UserProject, foreignKey: 'user_id', otherKey: 'id'});
Project.belongsToMany(User, {as: 'projectUsers', through: UserProject, foreignKey: 'project_id'});
