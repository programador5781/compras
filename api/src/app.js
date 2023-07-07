const express = require('express');
const morgan = require('morgan');


const app = express(); // Este es mi servidor

app.use(morgan('devs'));



module.exports = app;