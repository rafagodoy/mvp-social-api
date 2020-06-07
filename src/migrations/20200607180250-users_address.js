module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("users_address", {
            id_users_address: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_users: {
                type: Sequelize.INTEGER,
            },
            street: {
                type: Sequelize.STRING(150),
            },
            number: {
                type: Sequelize.STRING(100),
            },
            complement: {
                type: Sequelize.STRING(100),
            },
            neighborhood: {
                type: Sequelize.STRING(100),
            },
            city: {
                type: Sequelize.STRING(100),
            },
            country: {
                type: Sequelize.STRING(100),
            },
            state: {
                type: Sequelize.STRING(100),
            },
            short_state_name: {
                type: Sequelize.STRING(10),
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
