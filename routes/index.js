
const express = require('express').Router;
const notes = require('./notes.js');

// Import our modular routers 
const api = express();

api.use('/api', notes);

module.exports = api;
