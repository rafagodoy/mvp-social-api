module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn("users", "password", {
                type: Sequelize.STRING(50),
                allowNull: true,
            }),
            queryInterface.addColumn("users", "photo_profile", {
                type: Sequelize.STRING(100),
                allowNull: true,
            }),
        ]);
    },

    down: () => {},
};
