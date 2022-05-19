"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("accounts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      profile: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.BIGINT
      },
      otp: {
        type: Sequelize.STRING
      },
      verified: {
        type: Sequelize.INTEGER
      },
      telephone: {
        type: Sequelize.STRING
      },
      group_id: {
        type: Sequelize.INTEGER
      },
      menu_id: {
        type: Sequelize.INTEGER
      },
      employee_role_id: {
        type: Sequelize.INTEGER
      },
      employee_status_id: {
        type: Sequelize.INTEGER
      },
      employee_grade_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable({tableName : "accounts", schema : "user"});
  }
};