require('dotenv').config({ path: '../.env' });
const { Sequelize } = require('sequelize');
const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DATABASE_URL } = process.env;

const dbConnectionString = DATABASE_URL || `postgres://${DB_USER || 'postgres'}:${DB_PASSWORD || 'postgres123'}@${DB_HOST || 'localhost'}:${DB_PORT || 5432}/${DB_NAME || 'rickandmorty'}`;

const sequelize = new Sequelize(
  dbConnectionString,
  {
    logging: false,
    native: false,
  }
);

// Model definitions
UserModel(sequelize);
FavoriteModel(sequelize);

const { User, Favorite } = sequelize.models;

// Many-to-Many Associations (N:M)
User.belongsToMany(Favorite, { through: 'User_Favorites' });
Favorite.belongsToMany(User, { through: 'User_Favorites' });

module.exports = {
  conn: sequelize,
  User,
  Favorite,
};
