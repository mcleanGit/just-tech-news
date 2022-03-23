const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create User model
class User extends Model {}

// define table columns and config
User.init(
 {
	 id: {
		 type: DataTypes.INTEGER,
		 allowNull: false,
		 primaryKey: true, 
		 autoIncrement: true
	 },
	 username: {
		 type: DataTypes.STRING,
		 allowNull: false
	 },
	 email: {
		 type: DataTypes.STRING,
		 allowNull: false,
		 unique: true,
		 validate: {
			 isEmail: true
		 }
	 },
	 password: {
		 type: DataTypes.STRING,
		 allowNull: false,
		 validate: {
			 len: [4]
		 }
	 }
 },
 {
  // pass in imported sequelize connection (the direc connection to db)
  sequelize,
  // don't automatically create createdAt timestamp fields
  timestamps: false,
  // don't pluralize name of database table
  freezeTableName: true,
  // use underscores instead of camelCasing (ie `comment-text` and not `commentText`)
  underscored: true,
  // make it so model name stays lowercase in db
  modelName: 'user'
 } 
);