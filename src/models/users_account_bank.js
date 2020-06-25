import { sequelize, DataTypes, Model } from "../config/sequelize";

class users_account_bank extends Model {}

users_account_bank.init(
    {
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
    },
    { sequelize, tableName: "users_account_bank" }
);

export default users_account_bank;
