const express = require('express');

//Initialization
const app = express();
require('./database');

//Settings
app.set('port',process.env.PORT || 3500);


//Middlewares
app.use(express.json())

//Routes
app.use(require('./routes/index.routes'));

module.exports = app;