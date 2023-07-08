const { Router } = require('express');


const usersRouter = Router();

// obtener una lista de usuarios del sistema
usersRouter.get('/', (req, res) => {
    res.status(200).send('Estoy en usuarios');
});

// detalles de un usuario del sistema
usersRouter.get('/:id', (req, res) => {
    res.status(200).send('Estoy en los detalles de un  user');
});

// crear un usuario
usersRouter.post('/' , (req, res) => {
    res.status(200).send('Voy a crear un usuario')
});


module.exports = usersRouter;