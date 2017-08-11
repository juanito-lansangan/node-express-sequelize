'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'users_projects',
      'user_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true
      },
    );
    queryInterface.changeColumn(
      'users_projects',
      'project_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true
      },
    );
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
