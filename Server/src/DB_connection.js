require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

const User = UserModel(sequelize);
const Favorite = FavoriteModel(sequelize);

User.belongsToMany(Favorite, { through: 'user_favorite' });
Favorite.belongsToMany(User, { through: 'user_favorite' });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};



