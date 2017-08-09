'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('PdrnRequest', {
    service_order_no: DataTypes.STRING,
    subject_lastname: DataTypes.STRING,
    subject_firstname: DataTypes.STRING,
    subject_midname: DataTypes.STRING,
    subject_extname: DataTypes.STRING,
    subject_address1: DataTypes.STRING,
    address1_province: DataTypes.STRING,
    address1_citymun: DataTypes.STRING,
    subject_contact_no: DataTypes.STRING,
  }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'pdrn_request'
  });

};
