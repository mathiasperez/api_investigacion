// En este archivo se coloca el código
// que permite configurar la conexión a la BD

// Trae la librería
// Es el import
const mongoose = require('mongoose');

const dbConection = async() => {
    try {
        //Debemos utilizar la cadena de conexion que tenemos en mongocompass
        // Si la BD projectsdb no existe, MongoDB la crea
        await mongoose.connect(process.env.DB_CNN);
        console.log('Conexion exitosa a la BD')
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la BD');
    }
}

module.exports = {
    dbConection
}