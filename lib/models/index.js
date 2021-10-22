'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';
let GameModel = require('./game');
let SystemModel = require('./system');

const sequelize = new Sequelize(DATABASE_URL, DataTypes);
const gameTable = GameModel(sequelize, DataTypes);
const systemTable = SystemModel(sequelize, DataTypes);

systemTable.hasMany(gameTable, { foreignKey: 'year', sourceKey: 'id' });
gameTable.belongsTo(systemTable, { foreignKey: 'year' }, { targetKey: 'id' });

module.exports = {
	db: sequelize,
	game: gameTable,
	system: systemTable,
};
