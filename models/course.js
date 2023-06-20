"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Course extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // Course {1..n}--{1} Category
         Course.belongsTo(models.Category, {
            as: "category",
            foreignKey: "id_category", // foreignKey de Courses
         });
      }
   }
   Course.init(
      {
         course_name: DataTypes.STRING,
         id_category: DataTypes.INTEGER,
      },
      {
         sequelize,
         modelName: "Course",
         tableName: "courses",
      }
   );
   return Course;
};
