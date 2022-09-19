const express = require('express');
require('express-async-errors');

const app = express();

app.use(express.json());

module.exports = app;
