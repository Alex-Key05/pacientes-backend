const express = require ('express');
const mongoose = require ('mongoose');
const routes = require('./routes'); // No hace falta poner 'index', js lo busca

// Crear servidor
const app = express();

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

// Habilitar routing
app.use('/', routes());

const port = process.env.PORT || 4000;

app.listen(port, (req, res) => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});