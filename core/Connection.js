const mongoose = require('mongoose');
try {
  mongoose.connect('mongodb://localhost:27017/myblog', {useUnifiedTopology: true, useNewUrlParser: true});
  //创建一个连接对象
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
    console.log("数据库连接成功....");
  });
} catch (error) {
  mongoose.close();
  console.error("数据库连接失败...", error);
}


module.exports = mongoose;