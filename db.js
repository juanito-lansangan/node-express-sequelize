'use strict';

const Sequelize = require('sequelize');
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/config/config.json')[env];

const db = new Sequelize(config.database, config.username, config.password, config);

module.exports = db;

// We'll define associations after we import them here
// const User = require('./models/User');
// const PdrnRequest = require('./models/PdrnRequest');
// const City = require('./models/City');
// const Province = require('./models/Province');

// Defining Relationships
// PdrnRequest.belongsTo(City, {foreignKey: 'address1_citymun'});
// PdrnRequest.belongsTo(Province, {foreignKey: 'address1_province'});
// Province.hasMany(City, {foreignKey: 'province_id'})
