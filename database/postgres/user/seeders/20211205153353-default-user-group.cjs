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

    let count_group = [
      1
    ];
    let data = [];
    let index = 0;
    let temp_count = 0;
    for (let i = 0; i < count_group.reduce((total, num) => (total + num)); i++) {
      if (temp_count >= count_group[index]) {
        index++;
        temp_count = 0;
      }
      if (index < count_group.length) {
        data.push(
          {
            account_id: (i + 1),
            group_id: (index + 1),
            is_default: true,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        )
        temp_count++;
      }
    }
    return await queryInterface.bulkInsert(
      {
        tableName: "user_groups", schema: "user"
      },
      data,
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
    return await queryInterface.bulkDelete({tableName : "user_groups", schema : "user"}, null, {});
  }
};
