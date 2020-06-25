import { sequelize, DataTypes, Model } from "../config/sequelize";

class users extends Model {}

users.init(
    {
        id_users: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(150),
        },
        last_name: {
            type: DataTypes.STRING(150),
        },
        age: {
            type: DataTypes.INTEGER,
        },
        have_sons: {
            type: DataTypes.STRING(10),
        },
        amount_sons: {
            type: DataTypes.INTEGER,
        },
        marital_state: {
            type: DataTypes.STRING(50),
        },
        short_profile_description: {
            type: DataTypes.STRING(200),
        },
        complete_profile_description: {
            type: DataTypes.STRING(500),
        },
        type_user: {
            type: DataTypes.STRING(50),
        },
        password: {
            type: DataTypes.STRING(50),
        },
        photo_profile: {
            type: DataTypes.STRING(100),
        },
        email: {
            type: DataTypes.STRING(50),
        },
    },
    { sequelize, tableName: "users" }
);

export default users;
