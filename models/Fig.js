const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Fig extends Model {
}

Fig.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        templateLitteral: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "Fig",
    }
),

    module.exports = Fig