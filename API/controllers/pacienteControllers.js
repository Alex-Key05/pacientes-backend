const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async(req, res, next) => {
    
    // Crear objeto de paciente con datos de req.body
    const paciente = new Paciente(req.body);

    try {
        await paciente.save();
        res.json({ mensaje: 'El paciente se agregó correctamente' });
    } catch (error) {
        next();
    }
}

// Obtiene todos los pacientes
exports.obtenerPacientes = async(req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes)
    } catch (error) {
        console.log(error)
        next();
    }
}