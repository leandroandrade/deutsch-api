const express = require('express');
require('express-async-errors');

const cors = require('cors');
const helmet = require('helmet');

const app = express();

const rl = require('./middlewares/rate-limit');
const errorHandler = require('./handlers/error-handler');
const responseErrorHandler = require('./handlers/response-error-handler');

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rl.init());

app.use('/api/v1', require('./routes'));

app.use(errorHandler);
app.use(responseErrorHandler);

module.exports = app;
