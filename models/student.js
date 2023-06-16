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
         // define association here
      }
   }
   Student.init(
      {
         user_name: DataTypes.STRING,
         user_last_name: DataTypes.STRING,
         birthday: DataTypes.DATE,
         active: DataTypes.ENUM("yes", "no"),
         id_nationality: DataTypes.INTEGER,
         id_address: DataTypes.INTEGER,
      },
      {
         sequelize,
         modelName: "Student",
         tableName: "students",
      }
   );
   return Student;
};
