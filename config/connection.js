// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to db, pass mySQL info username password
const sequelize = new Sequelize('just_tech_news_db', 'mclean@utoronto.ca', '02468a13579B!', {
 host: 'localhost',
 dialect: 'mysql',
 port: 3306
});

module.exports = sequelize;
