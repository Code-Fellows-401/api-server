'use strict';

const Game = (sequelize, DataTypes) =>
	sequelize.define('Game', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		system: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

module.exports = Game;
