"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  token.init({
    account_id: DataTypes.INTEGER,
    token: DataTypes.TEXT,
    expired: DataTypes.BIGINT,
    time: DataTypes.BIGINT,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    modelName: "token",
  });
  token.createToken = async function (_account_id, _token) {

    let last = await token.findOne(
      {
        order: [
          ["id", "DESC"]
        ],
        paranoid: false
      }
    );
    let id = last ? parseInt(last.id) + 1 : 1
    let dataToken = await this.create(
      {
        id,
        token: _token,
        account_id: _account_id,
        time: (new Date()).getTime(),
        createdBy: _account_id,
        updatedBy: _account_id, 
      }
    );

    return dataToken.token;
  };

  return token;
};