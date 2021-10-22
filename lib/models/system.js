'use strict';

const System = (sequelize, DataTypes) =>
	sequelize.define('System', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		year: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

module.exports = System;
