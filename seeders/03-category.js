"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "categories",
         [
            {
               category: "Frontend",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               category: "Backend",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("categories", {
         [Op.or]: [{ category: "Frontend" }, { category: "Backend" }],
      });
   },
};
