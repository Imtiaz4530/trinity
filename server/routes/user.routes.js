const route = require('express').Router();

const { registerUser, loginUser } = require('../controllers/user.controller');

route.post('/register', registerUser);
route.post('/login', loginUser);

module.exports = route;