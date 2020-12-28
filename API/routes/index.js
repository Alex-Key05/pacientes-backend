const express = require('express');
const pacienteController = require('../controllers/pacienteControllers');

const router = express.Router();

module.exports = function() {
    router.post('/pacientes', 
        pacienteController.nuevoCliente
    );

    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    return router;
}