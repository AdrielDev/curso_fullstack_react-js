// Importando express para o projeto
const express = require('express');
const routes = express.Router();

routes.get('/', function(req, res) {
    res.send('Bem vindo a nossa primeira rota');
});

module.exports = routes;