const { Model, DataTypes } = require('sequelize');
const { underscoredIf } = require('sequelize/types/utils');
const sequelize = require('../config/connection');

// create User model
class User extends Model {}

// define table columns and cofig
User.init(
 {
  // TABLE COLUMN DEFINITIONS GO HERE
 },
 {
  // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))  
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