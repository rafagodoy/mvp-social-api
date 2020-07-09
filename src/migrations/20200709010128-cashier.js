"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([queryInterface.renameColumn("cashier", "updated_at", "date_last_update")]);
    },

    down: () => {},
};
