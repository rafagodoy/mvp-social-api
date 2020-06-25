module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert("status_donations", [
            {
                id_status_donations: 1,
                name: "Aguardando doação",
            },
            {
                id_status_donations: 2,
                name: "Doação recebida",
            },
            {
                id_status_donations: 3,
                name: "Doação recusada",
            },
        ]);
    },

    down: () => {
        /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('People', null, {});
  */
    },
};
