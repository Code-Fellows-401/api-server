'use strict';

const express = require('express');
const router = express.Router();
const { game, system } = require('../models');
const modelWare = require('../middleware/model');

const Collection = require('../Collection');

const modelsMap = {
	game: new Collection(game),
	system: new Collection(system),
};

router.use('/:model', modelWare, function (req, res, next) {
	const model = modelsMap[req.params.model];
	req.model = model;
	next();
});

router.get('/:model', async (req, res, next) => {
	console.log('OK');
	const model = req.model;
	let records = await model.read();
	res.status(200).send(records);
});

router.get('/:model/:id', async (req, res, next) => {
	const model = req.model;
	const id = req.params.id;
	let records = await model.read(id);
	res.status(200).send(records);
});

router.post('/:model', async (req, res, next) => {
	const model = req.model;
	const json = req.body;
	let newRecord = await model.create(json);
	res.status(201).send(newRecord);
});

router.put('/:model/:id', async (req, res, next) => {
	const id = req.params.id;
	const model = req.model;
	const json = req.body;
	let updateRecord = await model.update(id, json);
	res.status(200).send(updateRecord);
});

router.delete('/:model/:id', async (req, res, next) => {
	const model = req.model;
	const id = req.params.id;
	let deleteRecord = await model.delete(id);
	res.status(200).send(deleteRecord);
});

module.exports = router;
