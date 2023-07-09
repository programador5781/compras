const { Router } = require('express');
const {
    getUsersHandler,
    getUserByIdHandler,
    createUserHandler
} = require('../handlers/usersHandlers');


const usersRouter = Router();

// obtener una lista de usuarios del sistema
usersRouter.get('/',  getUsersHandler);

// detalles de un usuario del sistema
usersRouter.get('/:id',getUserByIdHandler);

// crear un usuario
usersRouter.post('/', createUserHandler);


module.exports = usersRouter;