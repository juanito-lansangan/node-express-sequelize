const Sequelize = require('sequelize');
const db = require('../db');

const PdrnRequest = db.define('pdrnRequest', {
    service_order_no: {
      type: Sequelize.STRING,
    },
    subject_lastname: {
      type: Sequelize.STRING,
    },
    subject_firstname: {
      type: Sequelize.STRING,
    },
    subject_midname: {
      type: Sequelize.STRING,
    },
    subject_extname: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    subject_address1: {
      type: Sequelize.STRING,
    },
    address1_province: {
      type: Sequelize.STRING,
    },
    address1_citymun: {
      type: Sequelize.STRING,
    },
    subject_contact_no: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'pdrn_request'
  }
);

module.exports = PdrnRequest;
