const router = require('express').Router();


// GET Route for landing
router.get('/', (req, res) => {  

  res.render('landing', {
    logged_in: req.session.logged_in
  });

});

module.exports = router;
