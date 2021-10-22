'use strict';

const express = require('express');
const router = express.Router();
const { Game } = require('../models');

router.get('/game', async (req, res) => {
	let findAll = await System.findAll();
	res.status(200).send(findAll);
});

router.get('/game/:id', async (req, res) => {
	let id = +req.params.id;
	let findOne = await Game.findOne({ where: id });
	res.status(200).send(findOne);
});

router.post('/game', async (req, res) => {
	let newGame = await Game.create({
		name: req.body.name,
		system: req.body.system,
	});
	res.status(200).json(newGame);
});

router.put('/game/:id', async (req, res) => {
	let id = +req.params.id;
	const findGame = await Game.findOne({
		where: { id },
	});
	let updateGame = await findGame.update(req.body);
	res.status(200).json(updateGame);
});

router.delete('/game/:id', async (req, res) => {
	let id = +req.params.id;
	await System.destroy({
		where: {
			id: id,
		},
	});
	res.status(200).send('Deleted');
});

module.exports = router;
