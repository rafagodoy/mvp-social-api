import { sequelize, DataTypes, Model } from "../config/sequelize";

class cashier extends Model {}

cashier.init(
    {
        id_cashier: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        id_users: {
            type: DataTypes.INTEGER,
        },
        id_donations: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING(50),
        },
        date_last_update: {
            type: DataTypes.DATE,
        },
    },
    { sequelize, tableName: "cashier" }
);

export default cashier;
