module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn("users", "email", {
                type: Sequelize.STRING(50),
                allowNull: true,
            }),
        ]);
    },

    down: () => {},
};
