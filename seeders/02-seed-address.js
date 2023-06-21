"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "addresses",
         [
            {
               street: "Calle del río",
               num: 42,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               street: "La carrera",
               num: 81,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               street: "Plaza Garibaldi",
               num: 45,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               street: "Avenida Avear",
               num: 33,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               street: "Avenida Boyacá",
               num: 64,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("addresses", {
         [Op.or]: [
            { street: "Calle del río" },
            { street: "La carrera" },
            { street: "Plaza Garibaldi" },
            { street: "Avenida Avear" },
            { street: "Avenida Boyacá" },
         ],
      });
   },
};
