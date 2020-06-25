module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("users_donations", {
            id_users_donations: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_user_from: {
                type: Sequelize.STRING(150),
            },
            id_user_to: {
                type: Sequelize.STRING(150),
            },
            id_donations: {
                type: Sequelize.INTEGER,
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
