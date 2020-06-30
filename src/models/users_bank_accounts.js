import { sequelize, DataTypes, Model } from "../config/sequelize";

class users_bank_accounts extends Model {}

users_bank_accounts.init(
    {
        id_users_bank_accounts: {
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
    { sequelize, tableName: "users_bank_accounts" }
);

export default users_bank_accounts;
