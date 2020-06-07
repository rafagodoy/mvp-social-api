import { sequelize, DataTypes } from "../config/sequelize";

const banks = sequelize.define("banks", {
    cod_bank: {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING(150),
    },
});

export default banks;
