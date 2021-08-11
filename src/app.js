const express = require('express');
const path = require('path');
const compression = require('compression');
const controllers = require('./controllers');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('port', process.env.PORT || 5000);
app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }));
app.use(controllers);
module.exports = app;
