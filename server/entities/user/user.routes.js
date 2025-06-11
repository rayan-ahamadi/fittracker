const { 
    getAllUsers,
    getUser,
    register,
    login
} = require('./user.controller'); // importation du controller

const express = require('express');
const Router = express.Router();


// Router.get('/all', getAllUsers);

Router.get('/:id', getUser);
Router.post('/register', register);
Router.post('/login', login);


module.exports = Router;