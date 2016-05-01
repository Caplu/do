'use strict';

const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('./lib/passport');
const config = require('./config');
const errorHandler = require('./middlewares/').errorHandler;
const initRoutes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(config.session));
app.use(passport.initialize());
app.use(passport.session());
initRoutes(app);
app.use(errorHandler);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(config.port, () => console.log(`Listening on ${config.port}...`));

module.exports = app;
