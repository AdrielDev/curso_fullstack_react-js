const express = require('express');
const server = express();
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//banco de dados
mongoose.connect('mongodb+srv://admin:admin@cluster0-dpg1k.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology : true});

//import mode
requireDir('./src/models');

//config
server.use(express.json());

//routes
server.use('/api', require('./src/routes'));

//começar a escutar em uma porta
server.listen(3002);
console.log('Servidor escutando na porta 3002');