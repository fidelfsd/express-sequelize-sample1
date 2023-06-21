"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "courses",
         [
            {
               course_name: "HTML",
               id_category: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               course_name: "CSS",
               id_category: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               course_name: "JavaScript",
               id_category: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               course_name: "SQL",
               id_category: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               course_name: "Express",
               id_category: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               course_name: "NodeJs",
               id_category: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("courses", {
         [Op.or]: [
            { course_name: "HTML" },
            { course_name: "CSS" },
            { course_name: "JavaScript" },
            { course_name: "SQL" },
            { course_name: "Express" },
            { course_name: "NodeJs" },
         ],
      });
   },
};
