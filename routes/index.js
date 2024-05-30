const express = require('express');
const router = express.Router();

// Define a route for the home page
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

module.exports = router;
