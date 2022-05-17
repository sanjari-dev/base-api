"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      group.hasMany(models.user_group, {
        foreignKey: "group_id"
      });
    }
  };
  group.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    by: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {
    scopes: {
      index: {}
    },
    sequelize,
    paranoid: true,
    modelName: "group",
  });
  
  group.add = async (data) => {

    // last account
    let last = await group.findOne({
      order: [
        ['id', 'DESC']
      ],
      paranoid: false
    })

    // set account id
    data.id = last ? last.id + 1 : 1

    // create data account
    let dataCreate = await group.create(data)

    return dataCreate
  }

  return group;
};