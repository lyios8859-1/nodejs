var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myblog');

//创建一个连接对象
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
  console.log("数据库连接成功....");
});

module.exports = mongoose;