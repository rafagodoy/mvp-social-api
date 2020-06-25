import { sequelize, DataTypes, Model } from "../config/sequelize";

import users from "./users";
import donations from "./donations";

class users_donations extends Model {}

users_donations.init(
    {
        id_users_donations: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        id_user_from: {
            type: DataTypes.INTEGER,
        },
        id_user_to: {
            type: DataTypes.INTEGER,
        },
        id_donations: {
            type: DataTypes.INTEGER,
        },
    },
    { sequelize, tableName: "users_donations" }
);

users_donations.hasMany(users, { as: "Donator", foreignKey: "id_users", sourceKey: "id_user_from" });
users_donations.hasMany(users, { as: "Beneficents", foreignKey: "id_users", sourceKey: "id_user_to" });

export default users_donations;
