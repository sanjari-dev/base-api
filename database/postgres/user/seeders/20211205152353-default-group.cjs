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
    let group = [
      {
        name: "Dev",
        count: 1
      }
    ]

    let auth_group = []
    group.forEach((g, i, arr) => {
      auth_group.push(
        {
          id: (i + 1),
          name: g.name,
          description: "",
          by: 1,
          count: g.count,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      )
    });

    return await queryInterface.bulkInsert(
      {
        tableName: "groups", schema: "user"
      },
      auth_group,
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
