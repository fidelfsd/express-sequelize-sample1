"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "students_courses",
         [
            {
               id_course: 1,
               id_student: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id_course: 1,
               id_student: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id_course: 1,
               id_student: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id_course: 2,
               id_student: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id_course: 2,
               id_student: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id_course: 2,
               id_student: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id_course: 3,
               id_student: 6,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id_course: 4,
               id_student: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id_course: 4,
               id_student: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id_course: 5,
               id_student: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id_course: 5,
               id_student: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id_course: 5,
               id_student: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("students_courses", {
         [Op.or]: [
            { id_course: 1, id_student: 1 },
            { id_course: 1, id_student: 2 },
            { id_course: 1, id_student: 3 },
            { id_course: 2, id_student: 1 },
            { id_course: 2, id_student: 2 },
            { id_course: 2, id_student: 3 },
            { id_course: 3, id_student: 6 },
            { id_course: 4, id_student: 1 },
            { id_course: 4, id_student: 2 },
            { id_course: 5, id_student: 1 },
            { id_course: 5, id_student: 2 },
            { id_course: 5, id_student: 3 },
         ],
      });
   },
};
