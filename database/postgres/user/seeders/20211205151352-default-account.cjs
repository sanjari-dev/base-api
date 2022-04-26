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
        tableName: "accounts", schema: "user"
      },
      [
        {
          id: 1,
          username: "dev",
          password: "32a398d0b65ad52f35f1d865072ba1bda9f4a0de", // !P@ssw0rd123
          email: "sanari@dev",
          phone_number: "6280000000000",
          verified: 1,
          otp: 0,
          name: "Developer Team",
          profile: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
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
    return await queryInterface.bulkDelete({tableName : "accounts", schema : "user"}, null, {});

  }
};
