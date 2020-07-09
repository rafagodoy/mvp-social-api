module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("cashier", {
            id_cashier: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_users: {
                type: Sequelize.INTEGER,
            },
            id_donations: {
                type: Sequelize.INTEGER,
            },
            status: {
                type: Sequelize.STRING(50),
            },
            updated_at: {
                type: Sequelize.DATE,
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
