require('dotenv').config({ path: '../.env' });
const { Sequelize } = require('sequelize');
const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER || 'postgres'}:${DB_PASSWORD || 'postgres123'}@${DB_HOST || 'localhost'}:${DB_PORT || 5432}/${DB_NAME || 'rickandmorty'}`,
  {
    logging: false,
    native: false,
  }
);

// Definición de modelos
UserModel(sequelize);
FavoriteModel(sequelize);

const { User, Favorite } = sequelize.models;

// Relaciones Muchos a Muchos (N:M)
User.belongsToMany(Favorite, { through: 'User_Favorites' });
Favorite.belongsToMany(User, { through: 'User_Favorites' });

module.exports = {
  conn: sequelize,
  User,
  Favorite,
};
