require('dotenv').config({ path: '../.env' });
const { Sequelize } = require('sequelize');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER || 'postgres'}:${DB_PASSWORD || 'postgres123'}@${DB_HOST || 'localhost'}:${DB_PORT || 5432}/${DB_NAME || 'rickandmorty'}`,
  {
    logging: false,
    native: false,
  }
);

module.exports = {
  conn: sequelize,
  ...sequelize.models,
};
