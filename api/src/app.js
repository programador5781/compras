const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes');

const app = express(); // Este es mi servidor

app.use(morgan('dev'));



app.use((req, res, next) => {
    console.log('Hola estoy pasando por el middleware');
    next();
});

app.use(mainRouter)


module.exports = app;