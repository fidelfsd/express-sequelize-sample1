"use strict";
const { maxSeed } = require("../config/global");
const { shuffle } = require("../_utils/common");

// ----------------------------------------------------------------------

const maxStudents = maxSeed.USER;
const maxCourses = maxSeed.COURSE;

const allStudentCourseCombinations = [];

for (let student = 2; student <= maxStudents; student++) {
   for (let course = 1; course <= maxCourses; course++) {
      allStudentCourseCombinations.push({ student, course });
   }
}

shuffle(allStudentCourseCombinations);

let students_courses = [...Array(maxStudents * 2)].map((_, index) => ({
   id_student: allStudentCourseCombinations[index].student,
   id_course: allStudentCourseCombinations[index].course,
   updatedAt: new Date(),
   createdAt: new Date(),
}));

// ----------------------------------------------------------------------

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert("students_courses", students_courses, {});
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("students_courses", {});
   },
};
