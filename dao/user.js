//获取mongoose的连接对象
var mongoose = require("../core/Connection");

//建立一个Schema的文档对象
var UserSchema = mongoose.Schema({
    username: String,//标题
    ctime: { type: Date, default: Date.now },//创建时间
    account:String,//内容
    password:String,//外面连接
    utime:{type:Date ,default:null},//更新时间
    status:{ type: Number, default: 1},/*0未发布1发布*/
    isdelete:{ type: Number, default: 0}/*0未删除1删除,逻辑删除：只是改一个状态，数据还是保留，物理删除：数据库不存在*/
});

//创建集合(创建表)
var User = mongoose.model('User', ContentSchema);

