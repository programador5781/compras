const { Router } = require('express');

const modelRouter = Router();

modelRouter.get('/', (req, res) => {
    res.status(200).send('Estoy en modelos de productos');
});

modelRouter.get('/:id', (req, res) => {
    res.status(200).send('Detalle de producto por id')
});

modelRouter.post('/', (req, res) => {
    res.status(201).send('Estoy creando un producto');
});



module.exports = modelRouter;