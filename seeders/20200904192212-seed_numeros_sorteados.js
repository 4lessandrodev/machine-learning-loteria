'use strict';

module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('numeros_sorteados',
      [
         {
            id: 1,
            numero: 1
         },
         {
            id: 2,
            numero: 2
         },
         {
            id: 3,
            numero: 3
         },
         {
            id: 4,
            numero: 4
         },
         {
            id: 5,
            numero: 5
         },
         {
            id: 6,
            numero: 6
         },
         {
            id: 7,
            numero: 7
         },
         {
            id: 8,
            numero: 8
         },
         {
            id: 9,
            numero: 9
         },
         {
            id: 10,
            numero: 10
         },
         {
            id: 11,
            numero: 11
         },
         {
            id: 12,
            numero: 12
         },
         {
            id: 13,
            numero: 13
         },
         {
            id: 14,
            numero: 14
         },
         {
            id: 15,
            numero: 15
         },
         {
            id: 16,
            numero: 16
         },
         {
            id: 17,
            numero: 17
         },
         {
            id: 18,
            numero: 18
         },
         {
            id: 19,
            numero: 19
         },
         {
            id: 20,
            numero: 20
         },
         {
            id: 21,
            numero: 21
         },
         {
            id: 22,
            numero: 22
         },
         {
            id: 23,
            numero: 23
         },
         {
            id: 24,
            numero: 24
         },
         {
            id: 25,
            numero: 25
         }
      ], {});
      
   },
   
   down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('numeros_sorteados', null, {});
   }
};
