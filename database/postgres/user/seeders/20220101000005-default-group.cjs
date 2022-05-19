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
        tableName: "groups", schema: "user"
      },
      [
        {
          id: 1,
          name: "Dev",
          description: "",
          by: 1,
          count: 1,
          display: "Dev",
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
    return await queryInterface.bulkDelete({tableName : "groups", schema : "user"}, null, {});

  }
};
