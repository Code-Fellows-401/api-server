'use strict';

const express = require('express');
const router = express.Router();
const { System } = require('../models');

router.get('/system', async (req, res) => {
	let findAll = await System.findAll();
	res.status(200).send(findAll);
});

router.get('/system/:id', async (req, res) => {
	let id = +req.params.id;
	let findOne = await System.findOne({ where: id });
	res.status(200).send(findOne);
});

router.post('/system', async (req, res) => {
	let newSystem = await System.create({
		name: req.body.name,
		year: req.body.system,
	});
	res.status(200).json(newSystem);
});

router.put('/system/:id', async (req, res) => {
	let id = +req.params.id;
	const findSystem = await Team.findOne({
		where: { id },
	});
	let updateSystem = await findSystem.update(req.body);
	res.status(200).json(updateSystem);
});

router.delete('/team/:id', async (req, res) => {
	let id = +req.params.id;
	await System.destroy({
		where: {
			id: id,
		},
	});
	res.status(200).send('Deleted');
});

module.exports = router;
