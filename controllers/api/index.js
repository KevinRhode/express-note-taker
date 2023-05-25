//import express router
const router = require('express').Router();

const noteRoutes = require('./noteRoutes');

// Import our modular routers 
router.use('/notes', noteRoutes);



//epxport the router 
module.exports = router;