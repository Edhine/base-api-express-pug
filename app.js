/**
 * Configuracion y preparacion APP
 * @author Edhine
 */
'use strict';

// Configuraciones estandar
require('./config/config');

// Express
var express = require('express');
var app = express();

// Logger REST
var loggerRest = require('morgan');
app.use(loggerRest(process.env.NODE_ENV));

// Middleware (Parser JSON)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/***********************************************
 * Habilitador de Cross-origin resource sharing
 *         @access REST (Middleware)      
 **********************************************/
var cors = require('cors');
app.use(cors());

// Setea directorio y motor de plantilla (PUG) (JADE)  
app.set('views', './views');
app.set('view engine', 'pug');

// Levantamiento Enrutador De Paginas
var routes = require('./routes/main');
app.use(routes);

// Exportar
module.exports = app;

