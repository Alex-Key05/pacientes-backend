const express = require ('express');
const mongoose = require ('mongoose');
const routes = require('./routes'); // No hace falta poner 'index', js lo busca
const bodyParser = require('body-parser');

// Crear servidor
const app = express();

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

// Habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));


// Habilitar routing
app.use('/', routes());

const port = process.env.PORT || 4000;

app.listen(port, (req, res) => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});