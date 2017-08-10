const Sequelize = require('sequelize');
const db = require('../db');

const Province = db.define('province', {
    province_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    province_name: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'province_master_file'
  }
);

module.exports = Province;
