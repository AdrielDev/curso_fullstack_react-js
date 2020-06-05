const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/userController');

routes.get('/user/:id', UserController.showUserById);

routes.post('/users', UserController.persistUser);
routes.get('/users', UserController.listUsers);
routes.get('/userGit', UserController.gitUser2020);
routes.post('/login/:username', UserController.login);


module.exports = routes;