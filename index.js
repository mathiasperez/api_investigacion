// Código para desplegar el Servicio

// Sintaxis para importar módulos en nodejs
const express = require('express');

// Invocar los archivos de configuración
require('dotenv').config();

// Importar database
// Se está haciendo desestructurización
const {dbConection} = require('./config/database')

// CORS
const cors = require('cors');

// Crear el servidor Express
const app = express();

// Configurar CORS, después de express
// Se despliega CORS en el middleware
app.use(cors());

// Insertar otro Middleware
// Para parsear JSON
app.use(express.json());

// Crear la conexión a la BD
dbConection();

// Verificando variables de entorno
// console.log(process.env);
 
//Rutas de la API Proyectos
app.use('/api/usuarios',require('./routes/usuarios.routes'));
app.use('/api/login',require('./routes/auth.routes'));
// app.use('/api/investigadores',require('./routes/investigadores.routes'));


// Codigo para desplegar el servidor
// Puerto 3000
app.listen(process.env.PORT,() => {
    console.log('Servidor NodeJS desplegado en el puerto:' + process.env.PORT);
})



// Usuario de BD
// adminproject
// Password de la BD
// cWaJMMctE21Ff3tX
