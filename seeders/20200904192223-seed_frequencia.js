'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('frequencias', [
       {
       id: 1,
       frequencia: 0,
       numero_id:1
       },
       {
       id: 2,
       frequencia: 0,
       numero_id:2
       },
       {
       id: 3,
       frequencia: 0,
       numero_id:3
       },
       {
       id: 4,
       frequencia: 0,
       numero_id:4
       },
       {
       id: 5,
       frequencia: 0,
       numero_id:5
       },
       {
       id: 6,
       frequencia: 0,
       numero_id:6
       },
       {
       id: 7,
       frequencia: 0,
       numero_id:7
       },
       {
       id: 8,
       frequencia: 0,
       numero_id:8
       },
       {
       id: 9,
       frequencia: 0,
       numero_id:9
       },
       {
       id: 10,
       frequencia: 0,
       numero_id:10
       },
       {
       id: 11,
       frequencia: 0,
       numero_id:11
       },
       {
       id: 12,
       frequencia: 0,
       numero_id:12
       },
       {
       id: 13,
       frequencia: 0,
       numero_id:13
       },
       {
       id: 14,
       frequencia: 0,
       numero_id:14
       },
       {
       id: 15,
       frequencia: 0,
       numero_id:15
       },
       {
       id: 16,
       frequencia: 0,
       numero_id:16
       },
       {
       id: 17,
       frequencia: 0,
       numero_id:17
       },
       {
       id: 18,
       frequencia: 0,
       numero_id:18
       },
       {
       id: 19,
       frequencia: 0,
       numero_id:19
       },
       {
       id: 20,
       frequencia: 0,
       numero_id:20
       },
       {
       id: 21,
       frequencia: 0,
       numero_id:21
       },
       {
       id: 22,
       frequencia: 0,
       numero_id:22
       },
       {
       id: 23,
       frequencia: 0,
       numero_id:23
       },
       {
       id: 24,
       frequencia: 0,
       numero_id:24
       },
       {
       id: 25,
       frequencia: 0,
       numero_id:25
       },
     ], {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('frequencias', null, {});
    
  }
};
