const express  = require('express');
const {login , signup} = require('./browseroute');

const route  = express.Router();

route.post('/login' , login);
route.post('/registation' , signup);

module.exports = route;
