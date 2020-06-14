const express = require('express');
const config = require('config');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Main',
    sources: config.get('pictures'),
    services: config.get('services'),
    tweets: config.get('tweets'),
    icons: config.get('icons'),
    mail: config.get('Customer.mail')
  });
});

module.exports = router;