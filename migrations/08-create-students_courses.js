"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("students_courses", {
         id_student: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
            references: {
               model: "students",
               key: "id",
            },
         },
         id_course: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
            references: {
               model: "courses",
               key: "id",
            },
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("students_courses");
   },
};
