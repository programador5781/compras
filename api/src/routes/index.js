// Módulo que contiene la responsabilidad del enrutado de nuestra app
// Importar el objeto 'Router' del módulo 'express'
const { Router } = require('express');
// Importar el enrutador 'usersRouter' desde el archivo 'usersRoutes.js'
const usersRouter = require('./usersRoutes');
// Importar el enrutador 'purchaseRouter' desde el archivo 'purchaseRoutes.js'
const purchaseRouter = require('./purchaseRoutes');
const modelRouter = require('./modelRoutes');

// Crear una instancia de enrutador llamada 'mainRouter'
const mainRouter = Router();






// Agregar el enrutador 'usersRouter' bajo el prefijo '/users' y '/purchase'
mainRouter.use('/users', usersRouter);
mainRouter.use('/purchase', purchaseRouter);
mainRouter.use('/models', modelRouter);






// Exportar la instancia de enrutador 'mainRouter' para su uso en otros archivos
module.exports = mainRouter;
