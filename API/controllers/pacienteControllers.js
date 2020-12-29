const Paciente = require("../models/Paciente");

exports.nuevoCliente = async (req, res, next) => {
  const paciente = new Paciente(req.body);

  try {
    await paciente.save();
    res.json({ mensaje: "Paciente agregado correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

// Obtiene todos los pacientes
exports.obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Obtiene un paciente específico por su ID
exports.obtenerPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Actualiza un registro por su ID
exports.actualizarPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findOneAndUpdate(
      { _id: req.params.id }, req.body, { new: true, 
    });
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Elimina un paciente por su ID
exports.eliminarPaciente = async(req, res, next) => {
    try {
        // Aquí no es necesario asignar una variable porque lo vamos a eliminar
        await Paciente.findOneAndDelete({ _id: req.params.id });
        res.json({ mensaje: 'El paciente se ha eliminado' });
    } catch (error) {
        console.log(error)
        next();
    }
}
