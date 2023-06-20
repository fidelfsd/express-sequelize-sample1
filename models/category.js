"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Category extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // Category {1}--{1..n} Course
         Category.hasMany(models.Course, {
            as: "course",
            foreignKey: "id_category", // foreingnKey en el modelo Course
         });
      }
   }
   Category.init(
      {
         category: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "Category",
         tableName: "categories",
      }
   );
   return Category;
};
