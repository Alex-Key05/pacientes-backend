const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// Crear servidor
const app = express();

// Habilitar cors
const whitelist = ['http:/localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whitelist.some( dominio => dominio === origin );
        if( existe ) {
            callback(null, true)
        } else {
            callback( new Error('No permitido por CORS') )
        }
    }
}

// Habilitar cors
app.use(cors());
// app.use(cors(corsOptions));

// Conectar a mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar el routing
app.use('/', routes());

const port = process.env.PORT || 4000;

app.listen(port, (req, res) => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});
