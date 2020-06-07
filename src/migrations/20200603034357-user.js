"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn("users", "have_sons", {
                type: Sequelize.BOOLEAN(),
                allowNull: true,
            }),
        ]);
    },

    down: () => {},
};
