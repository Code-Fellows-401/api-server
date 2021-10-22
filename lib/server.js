'use strict';

const express = require('express');
const app = express();
const gameRoute = require('./routes/game');
const systemRoute = require('./routes/system');
const err404 = require('./error-handlers/404');
const err500 = require('./error-handlers/500');

app.use(express.json());
app.use(gameRoute);
app.use(systemRoute);

app.use(err404);
app.use(err500);

module.exports = {
	app,
	start: (port) => app.listen(port, () => console.log('listening on', port)),
};
