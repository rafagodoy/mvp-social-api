module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("users_account_bank", {
            id_users_account_bank: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_banks: {
                type: Sequelize.INTEGER,
            },
            id_users: {
                type: Sequelize.INTEGER,
            },
            agency: {
                type: Sequelize.STRING(50),
            },
            account: {
                type: Sequelize.STRING(50),
            },
            owner: {
                type: Sequelize.STRING(150),
            },
            cpf: {
                type: Sequelize.STRING(30),
            },
            account_type: {
                type: Sequelize.STRING(30),
            },
        });
    },

    down: () => {
        /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.dropTable('users');
  */
    },
};
