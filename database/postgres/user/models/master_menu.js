"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class master_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      master_menu.hasMany(models.menu_item, {
        foreignKey: "master_menu_id"
      });
    }
  };
  master_menu.init({
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    slug: DataTypes.STRING,
    path: DataTypes.STRING,
    display: DataTypes.STRING,
    status: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    modelName: "master_menu",
  });
  return master_menu;
};