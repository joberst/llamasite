var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Home' 
  });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
  	title: 'About Us' 
  });
});

/* GET Strategies page. */
router.get('/strategies', function(req, res, next) {
  res.render('strategies', { 
  	title: 'Strategies' 
  });
});

/* GET Get Started page. */
router.get('/getstarted', function(req, res, next) {
  res.render('getstarted', { 
  	title: 'Get Started' 
  });
});

/* GET Blogs page. */
router.get('/blogs', function(req, res, next) {
  res.render('blogs', { 
  	title: 'Blogs' 
  });
});

/* GET Blogs page. */
router.get('/whoweare', function(req, res, next) {
  res.render('whoweare', { 
    title: 'Who We Are' 
  });
});


module.exports = router;
