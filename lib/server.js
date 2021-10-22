'use strict';

const express = require('express');
const app = express();
const err404 = require('./error-handlers/404');
const err500 = require('./error-handlers/500');
const model = require('./routes/api');

app.use(express.json());
app.use('/api', model);

app.use(err404);
app.use(err500);

module.exports = {
	app,
	start: (port) => app.listen(port, () => console.log('listening on', port)),
};
