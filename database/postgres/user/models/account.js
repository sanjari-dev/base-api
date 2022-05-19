"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      account.belongsTo(models.group, {
        foreignKey: "group_id"
      });
      account.belongsTo(models.menu, {
        foreignKey: "menu_id"
      });
      account.belongsTo(models.employee_role, {
        foreignKey: "employee_role_id"
      });
      account.belongsTo(models.employee_status, {
        foreignKey: "employee_status_id"
      });
      account.belongsTo(models.employee_grade, {
        foreignKey: "employee_grade_id"
      });

      account.hasMany(models.notification, {
        foreignKey: "account_id"
      });
      account.hasMany(models.activity, {
        foreignKey: "account_id"
      });
    }
  };
  account.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    profile: DataTypes.STRING,
    birthday: DataTypes.BIGINT,
    otp: DataTypes.STRING,
    verified: DataTypes.INTEGER,
    telephone: DataTypes.STRING,
    group_id: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER,
    employee_role_id: DataTypes.INTEGER,
    employee_status_id: DataTypes.INTEGER,
    employee_grade_id: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    defaultScope: {},
    scopes: {
      profile(_models, where)
      {
        const data = {
          include: [
            _models.group
          ]
        };
        if (where) {
          data.where = where;
        }
        return data;
      }
    },
    sequelize,
    paranoid: true,
    modelName: "account",
  });
  return account;
};