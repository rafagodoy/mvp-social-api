"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.removeColumn("donations", "id_user_from"),
            queryInterface.removeColumn("donations", "id_user_to"),
        ]);
    },

    down: () => {},
};
