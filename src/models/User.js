const { Sequelize } = require('sequelize');
const sequelize = require('../database');

class User extends Sequelize.Model {}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNulll: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNulll: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    balance: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    sequelize,
    modelName: 'user',
  },
);

module.exports = User;
