let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./src/client/routes/index');

global.httpOk = 200;
global.httpCreated = 201;
global.httpBadRequest = 400;
global.httpUnauthorized = 401;
global.httpNotFound = 404;
global.httpServiceUnavailable = 503;

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;
