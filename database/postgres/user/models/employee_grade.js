"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class employee_grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      employee_grade.hasMany(models.account, {
        foreignKey: "employee_grade_id"
      });
    }
  };
  employee_grade.init({
    grade: DataTypes.STRING,
    description: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    modelName: "employee_grade",
  });
  return employee_grade;
};