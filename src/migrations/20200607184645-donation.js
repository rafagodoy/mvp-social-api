module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("donations", {
            id_donations: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_user_from: {
                type: Sequelize.INTEGER,
            },
            id_user_to: {
                type: Sequelize.INTEGER,
            },
            value_donation: {
                type: Sequelize.FLOAT,
            },
            date_donation: {
                type: Sequelize.DATE,
            },
            acknowledgment: {
                type: Sequelize.STRING(200),
            },
            note: {
                type: Sequelize.STRING(150),
            },
            id_status_donations: {
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
