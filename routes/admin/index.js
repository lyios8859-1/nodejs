var express = require('express');
var router = express.Router();

// 登录页面
router.get('/login', function (req, res, next) {
  console.log('*'.repeat(100))
  res.render('admin/login', {title: '登陆页面', layout: null});
});

// 登录首页
router.get('/logined', function (req, res, next) {

  res.render('admin/index', {title: '后台首页', layout: null});
});

module.exports = router;