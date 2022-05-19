"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("notifications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      account_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      is_read: {
        type: Sequelize.BIGINT
      },
      description: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      link_path: {
        type: Sequelize.STRING
      },
      link_params: {
        type: Sequelize.STRING
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    }, {
      schema : "user"
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName : "notifications", schema : "user"});
  }
};