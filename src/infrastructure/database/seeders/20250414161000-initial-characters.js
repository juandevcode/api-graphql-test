"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Intentionally left empty — Sync with the cron job
    return;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Characters", null, {});
  },
};
