module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn("users", "type_user", {
            type: Sequelize.STRING(50),
            allowNull: false,
        });
    },

    down: () => {},
};
