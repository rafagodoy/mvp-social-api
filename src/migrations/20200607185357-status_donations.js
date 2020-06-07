module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("status_donations", {
            id_status_donations: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING(50),
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
