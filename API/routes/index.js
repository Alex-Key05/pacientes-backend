const express = require ('express');
const pacienteControllers = require ('../controllers/pacienteControllers.js');

const router = express.Router();

// Para poder exportarlo a los diferentes archivos
module.exports = function() {

    // Agrega nuevos pacientes vía POST
    router.post('/pacientes', 
        pacienteControllers.nuevoCliente
    )

    return router;
}