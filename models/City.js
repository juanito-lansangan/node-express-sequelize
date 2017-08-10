const Sequelize = require('sequelize');
const db = require('../db');

const City = db.define('city', {
    province_id: {
      type: Sequelize.INTEGER,
    },
    city_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    city_name: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'city_master_file'
  }
);

module.exports = City;
