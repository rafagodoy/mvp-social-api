module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert("banks", [
            {
                cod_bank: 1,
                name: "Banco do Brasil",
            },
            {
                cod_bank: 104,
                name: "Caixa econômica",
            },
            {
                cod_bank: 341,
                name: "Banco Itaú",
            },
            {
                cod_bank: 33,
                name: "Banco Santander",
            },
            {
                cod_bank: 237,
                name: "Banco Bradesco",
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
