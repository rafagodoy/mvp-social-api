"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([queryInterface.dropTable("users_donations")]);
    },

    down: () => {},
};
