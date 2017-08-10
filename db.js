'use strict';

const Sequelize = require('sequelize');
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/config/config.json')[env];

const db = new Sequelize(config.database, config.username, config.password, config);

module.exports = db;

// We'll define associations after we import them here
const User = require('./models/User');
const PdrnRequest = require('./models/PdrnRequest');
const City = require('./models/City');
const Province = require('./models/Province');

// Defining Relationships
PdrnRequest.belongsTo(City, {foreignKey: 'address1_citymun'});
PdrnRequest.belongsTo(Province, {foreignKey: 'address1_province'});

// Park.hasMany(Puppy);

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// console.log(db.sequelize);
// console.log(db.Sequelize);
// Insert models below
// db.PdrnRequest = db.sequelize.import('./model/pdrn-request');
// db.City = db.sequelize.import('./model/city');
// db.User = db.sequelize.import('./model/user');

// Relations
// db.PdrnRequest.belongsTo(db.City);


// var PdrnRequest = require('../models/PdrnRequest');
// var City = require('../models/City');
// var User = require('../models/User');

// PdrnRequest.belongsTo(City);
