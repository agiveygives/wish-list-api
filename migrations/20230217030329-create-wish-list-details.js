'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('wishListDetails', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      wishListId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'wishLists',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      endDate: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      },
      validAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      invalidAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('wishListDetails');
  }
};