import { sequelize, DataTypes } from "../config/sequelize";

const users_address = sequelize.define("users_address", {
    id_users_address: {
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
});

export default users_address;
