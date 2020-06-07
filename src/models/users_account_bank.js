import { sequelize, DataTypes } from "../config/sequelize";

const users_account_bank = sequelize.define("users_account_bank", {
    id_users_account_bank: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    id_banks: {
        type: DataTypes.INTEGER,
    },
    id_users: {
        type: DataTypes.INTEGER,
    },
    agency: {
        type: DataTypes.STRING(50),
    },
    account: {
        type: DataTypes.STRING(50),
    },
    owner: {
        type: DataTypes.STRING(150),
    },
    cpf: {
        type: DataTypes.STRING(30),
    },
    account_type: {
        type: DataTypes.STRING(30),
    },
});

export default users_account_bank;
