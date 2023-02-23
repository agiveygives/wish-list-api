'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserDetails', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      firstName: {
        type: Sequelize.TEXT,
        validate: {
          len: [1, 50]
        }
      },
      lastName: {
        type: Sequelize.TEXT,
        validate: {
          len: [1, 50]
        }
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true,
          isThirteenOrOlder(value) {
            const dateOfBirth = new Date(value);
            const thirteenYearOld = new Date();
            thirteenYearOld.setFullYear(thirteenYearOld.getFullYear() - 13);

            if (dateOfBirth < thirteenYearOld) {
              throw new Error('Must be 13 or older!');
            }
          }
        }
      },
      username: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          is: /^[a-zA-Z0-9]+[a-zA-Z0-9\-\_\.]*[a-zA-Z0-9]+$/i,
          len: [3, 50]
        }
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          isEmail: true
        }
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
    await queryInterface.dropTable('UserDetails');
  }
};