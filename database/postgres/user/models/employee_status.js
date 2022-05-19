"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class employee_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      employee_status.hasMany(models.account, {
        foreignKey: "employee_status_id"
      });
    }
  };
  employee_status.init({
    name: DataTypes.STRING,
    name_short: DataTypes.STRING,
    description: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: "employee_status",
  });
  return employee_status;
};