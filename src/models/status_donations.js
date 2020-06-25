import { sequelize, DataTypes, Model } from "../config/sequelize";

class status_donations extends Model {}

status_donations.init(
    {
        id_status_donations: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
        },
    },
    { sequelize, tableName: "status_donations" }
);

export default status_donations;
