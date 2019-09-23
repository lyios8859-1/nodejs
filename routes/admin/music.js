console.log('ssssssssssssssssssssss..............................');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin/music/index', { title: '歌曲欣赏', layout: null });
});
module.exports = router;
