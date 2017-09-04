var express = require('express');
var router = express.Router();
var trimHtml = require('trim-html');
//console.log(trimHtml+"===");
var Content = require("../dao/content");
//首页查询数据
router.get('/', function(req, res) {
  res.render('upload/index', { uploadFileName: '上传文件' });
});

module.exports = router;
