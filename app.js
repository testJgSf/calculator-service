require('dotenv').config();
let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let log4js = require("log4js");
global.log = log4js.getLogger();
log.level = 'debug';
let indexRouter = require('./src/client/routes/calculator');

global.httpOk = 200;
global.httpBadRequest = 400;
global.httpServiceUnavailable = 503;

let app = express();

app.use(logger('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;
