"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Student extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // Student {01}--{1} User
         Student.belongsTo(models.User, {
            as: "user",
            foreignKey: "id_user", // foreignKey de Student
         });

         // Student {0..n}--{1} Nationality
         Student.belongsTo(models.Nationality, {
            as: "nationality",
            foreignKey: "id_nationality", // foreignKey de Student
         });

         // Student {0..n}--{1} Address
         Student.belongsTo(models.Address, {
            as: "address",
            foreignKey: "id_address", // foreignKey de Student
         });

         // Student {0..n}--{1..n} Course
         Student.belongsToMany(models.Course, {
            as: "courses",
            through: "students_courses",
            foreignKey: "id_student", // foreignKey en students_courses
         });
      }
   }
   Student.init(
      {
         active: DataTypes.ENUM("yes", "no"),
         id_nationality: DataTypes.INTEGER,
         id_address: DataTypes.INTEGER,
         id_user: DataTypes.INTEGER,
      },
      {
         sequelize,
         modelName: "Student",
         tableName: "students",
      }
   );
   return Student;
};
