"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.renameColumn("users_bank_accounts", "id_users_account_bank", "id_users_bank_accounts"),
        ]);
    },

    down: () => {},
};
