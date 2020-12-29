const express = require('express');
const pacienteController = require('../controllers/pacienteControllers');

const router = express.Router();

module.exports = function() {

    // Add a new patient
    router.post('/pacientes', 
        pacienteController.nuevoCliente
    );

    // Obtiene todos los registros de pacientes en la DB
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    // Obtener un paciente específico
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    // Actualizar un registro con un ID específico
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    return router;
}