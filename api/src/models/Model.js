const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Archivo de configuración de Sequelize

const Model = sequelize.define('Model', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Model;
