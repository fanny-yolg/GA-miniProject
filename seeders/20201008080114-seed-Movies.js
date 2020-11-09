'use strict';
const fs = require('fs')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const parseData = JSON.parse(fs.readFileSync('./data.json'))
   const movieData = []
  //  console.log(movieData)
   parseData.forEach(data => {
    const { img_url_backdrop,img_url_poster,title,genre,date_data_in,release_date,synopsis,director,budget,trailer_url} = data
    movieData.push({img_url_backdrop,img_url_poster,title,genre,date_data_in,release_date,synopsis,director,budget,trailer_url,createdAt:new Date(),updatedAt:new Date()})
    })
    await queryInterface.bulkInsert('Movies', movieData, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   await queryInterface.bulkDelete('Movies', null, {});

  }
};
