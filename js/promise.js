//测试promise的用法
const fs = require('fs');
fs.readFile('../promise.html',function (err,data) {
   var p1 = new Promise(function (resolve,reject) {
        if(err){
            //执行错误的回调
            reject(error);
        }else{
            resolve(data);
        }
   });
   p1.then(function (value) {
       //打印成功
       console.log(value.toString());
   },function (value) {
       //打印失败
       console.log(value);
   })
});
