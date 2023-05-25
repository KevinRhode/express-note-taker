//import express router
const router = require('express').Router();
const publicRoutes = require('./publicRoutes');
const apiRoutes = require('./api');


// Import our modular routers 

router.use('/',publicRoutes);
router.use('/api', apiRoutes);
//epxport the router 
module.exports = router;
