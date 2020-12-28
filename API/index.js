const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

// Conectar a mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));

// Habilitar el routing
app.use('/', routes());

const port = process.env.PORT || 4000;

app.listen(port, (req, res) => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});
