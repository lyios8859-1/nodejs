console.log('ssssssssssssssssssssss..............................');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('musin page');
});
module.exports = router;
