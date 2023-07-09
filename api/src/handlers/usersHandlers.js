const { User } = require('../db');
const axios = require('axios')
// Obtener listado de todos los users del sistema(trabajadores), llamado a la db donde se han almacenado los trabajadores.
const getUsersHandler = async (req, res) => {
    try {
        const allUsers = await User.findAll();
        
        if (!allUsers.length) {
          const apiUsersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
          const apiUsers = apiUsersResponse.data.map((e) => {
            return {
              id: e.id,
              name: e.name,
              username: e.username,
              email: e.email,
              phone: e.phone,
              image: e.image,
            };
          });
    
          await User.bulkCreate(apiUsers);
          console.log("Create users successfully!");
        }
    
        const users = await User.findAll(); // Obtener todos los usuarios después de la creación inicial o si ya existían en la base de datos
        
        res.status(200).json(users);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
};

// Obtener user por id
const getUserByIdHandler = (req, res) => {
    res.status(200).send('Detalles de un user o trrabajador por id')
}

// Creación de un nuevo trabajador o usuario
const createUserHandler = (req, res) => {
    res.status(201).send('Estoy creando un user o trabajador');
    
};



module.exports = {
    getUsersHandler,
    getUserByIdHandler,
    createUserHandler
}