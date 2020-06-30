"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([queryInterface.renameColumn("users_addresses", "id_users_address", "id_users_addresses")]);
    },

    down: () => {},
};
