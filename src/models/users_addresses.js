import { sequelize, DataTypes, Model } from "../config/sequelize";

class users_addresses extends Model {}

users_addresses.init(
    {
        id_users_addresses: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        id_users: {
            type: DataTypes.INTEGER,
        },
        street: {
            type: DataTypes.STRING(150),
        },
        number: {
            type: DataTypes.STRING(100),
        },
        complement: {
            type: DataTypes.STRING(100),
        },
        neighborhood: {
            type: DataTypes.STRING(100),
        },
        city: {
            type: DataTypes.STRING(100),
        },
        country: {
            type: DataTypes.STRING(100),
        },
        state: {
            type: DataTypes.STRING(100),
        },
        short_state_name: {
            type: DataTypes.STRING(10),
        },
    },
    { sequelize, tableName: "users_addresses" }
);

export default users_addresses;
