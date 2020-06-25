import { sequelize, DataTypes, Model } from "../config/sequelize";

import users_donations from "./users_donations";

class donations extends Model {}

donations.init(
    {
        id_donations: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        value_donation: {
            type: DataTypes.FLOAT,
        },
        date_donation: {
            type: DataTypes.DATE,
        },
        acknowledgment: {
            type: DataTypes.STRING(200),
        },
        note: {
            type: DataTypes.STRING(150),
        },
        id_status_donations: {
            type: DataTypes.INTEGER,
        },
    },
    { sequelize, tableName: "donations" }
);

donations.hasOne(users_donations, { as: "UsersDonation", foreignKey: "id_donations" });
users_donations.belongsTo(donations, { as: "Donation", foreignKey: "id_donations" });

export default donations;
