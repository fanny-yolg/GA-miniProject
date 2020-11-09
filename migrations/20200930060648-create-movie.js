'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      img_url_backdrop: {
        type: Sequelize.STRING
      },
      img_url_poster: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      date_data_in: {
        type: Sequelize.DATE
      },
      release_date: {
        type: Sequelize.DATE
      },
      synopsis: {
        type: Sequelize.TEXT
      },
      director: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.INTEGER
      },
      trailer_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Movies');
  }
};