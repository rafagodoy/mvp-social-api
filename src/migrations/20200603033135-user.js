module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([queryInterface.removeColumn("users", "have_sons")]);
    },

    down: (queryInterface) => {},
};
