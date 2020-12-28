
// Cuando se crea un nuevo cliente
exports.nuevoCliente = (req, res, next) => {
    // TODO: Insertar en la base de datos
 
    res.json({mensaje : 'El cliente se agregó correctamente'});
}