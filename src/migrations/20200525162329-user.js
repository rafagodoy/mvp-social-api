module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("users", {
            id_users: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING(150),
            },
            last_name: {
                type: Sequelize.STRING(150),
            },
            age: {
                type: Sequelize.INTEGER,
            },
            have_sons: {
                type: Sequelize.STRING(10),
            },
            amount_sons: {
                type: Sequelize.INTEGER,
            },
            marital_state: {
                type: Sequelize.STRING(50),
            },
            short_profile_description: {
                type: Sequelize.STRING(200),
            },
            complete_profile_description: {
                type: Sequelize.STRING(500),
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
