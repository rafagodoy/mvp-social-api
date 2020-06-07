module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("banks", {
            id_banks: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            cod_bank: {
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING(150),
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
