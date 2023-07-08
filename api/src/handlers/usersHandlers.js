// Obtener listado de todos los users del sistema(trabajadores), llamado a la db donde se han almacenado los trabajadores.
const getUsersHandler = (req, res) => {
    res.status(200).send('Estoy en el listado de los usuarios');
};

// Obtener user por id
const getUserHandler = (req, res) => {
    res.status(200).send('Detalles de un user o trrabajador por id')
}

// Creación de un nuevo trabajador o usuario
const createUserHandler = (req, res) => {
    res.status(201).send('Estoy creando un user o trabajador');
    
};



module.exports = {
    getUsersHandler,
    getUserHandler,
    createUserHandler
}