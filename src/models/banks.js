import { sequelize, DataTypes, Model } from "../config/sequelize";

class banks extends Model {}

banks.init(
    {
        cod_bank: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING(150),
        },
    },
    { sequelize, tableName: "banks" }
);

export default banks;
