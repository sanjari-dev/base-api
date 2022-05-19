"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert("People", [{
     *   name: "John Doe",
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert(
      {
        tableName: "employee_statuses", schema: "user"
      },
      [
        {
          id: 1,
          name: "Team",
          name_short: "team",
          description: "",
          createdBy: 1,
          updatedBy: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete("People", null, {});
     */
    return await queryInterface.bulkDelete({tableName : "employee_statuses", schema : "user"}, null, {});

  }
};
