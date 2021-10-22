'use strict';

const system = (sequelize, DataTypes) =>
	sequelize.define('system', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		year: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

module.exports = system;
