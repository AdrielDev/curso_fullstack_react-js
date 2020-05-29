const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');

routes.post('/user',userController.persistData);
routes.get('/user',userController.listUsers);
routes.get('/userOne',userController.listOne);

module.exports = routes;