const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');

routes.post('/user',userController.persistData);
routes.get('/user',userController.listUsers);
routes.get('/userOne/:id',userController.listOne);
routes.get('/user/:sex',userController.listBySex);
routes.get('/userAge/:age',userController.listByAge);
routes.get('/userFields/:fields',userController.listManyFields);

module.exports = routes;