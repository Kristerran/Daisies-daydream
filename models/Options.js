const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Options extends Model {
}

Options.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        option: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image_src: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        question_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Question',
                key: 'id',
        },
        }
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "Options",
    }
),

    module.exports = Options