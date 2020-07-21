module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn("users", "status", {
                type: Sequelize.STRING(10),
            }),
        ]);
    },

    down: () => {},
};
