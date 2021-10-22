'use strict';

const game = (sequelize, DataTypes) =>
	sequelize.define('game', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		year: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

module.exports = game;
