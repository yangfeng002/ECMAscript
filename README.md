# ECMAscript
js---组成部分：ECMA BOM  DOM
ECMA是一个标准，被js实现
html5也是一个标准，被各大浏览器实现

************************************************
              ES6相关详情讲解

一、变量的定义
    使用let定义变量    let a = 12;//定义变量已经被浏览器实现

    区别：
      1. 使用var定义的变量只有函数作用域，而let定义的变量多了一个块级作用域的概念{}
      2.let不允许重复声明

    总结：其实let才是接近其他语言的变量

    用处：封闭空间
    ES5里面
    (function(){

    })()

    ES6里面（解决i的问题，例如  问题.html）
    {

    }
-----------------------------------------------------
***  const常量----（用途：防止修改变量，如库名或者组件名）
       1. 声明之后，后面将无法修改
       2.常量声明的时候必须赋值
       3.不能重复声明
----------------------------------------------------------
**   字符串连接
   之前定义：var str = ""; var str = '';   '+str+'
   现在ES6： var str = ``;//字符串模板(使用的是键盘1前面的符号)   `${str}`
----------------------------------------------------------
解构赋值(匹配模式)
   数组
      var [a,b,c] = [12,5,101]  var [a,[b,c],d]= [12,[5,6],101]
      var [{a,e},b,c,d] = [{e:'eee',a:'aaa'},5,2,101]
   对象
   var {a,b,c} = {a:12,b:5,c:101} //与顺序无关

   交互---数据解析
    [{title:'',href:'',img:''}]
  解构赋值可以给默认值
  var json = {}
  var a = json.a || 12

  语法：var {time=12,id=0} = {};

-----------------------------------------------------------------
  复制数组------spread map for-of循环
        1.通过for循环
        2.Array.from方法
        3. ...数组名

 ---------------------------------------------------------------
 循环
     普通的for循环
     for in ----for(var i in array){} 可以遍历json对象，也可以遍历数组
     for of  ---只能遍历数组，不能遍历json,主要用来遍历Map的
     Map对象和json相似，主要是为了for of循环配合而生
     var map = new Map();
     设置 map.set(key,value);  获取  map.get(key); 删除 map.delete(name)
----------------------------------------------------------------------
函数
   ES5:
    function show(){

    }
    show();调用

    ES6 箭头函数  ()=>{}
       1.this指向有问题，指向的是window
       2.arguments不能使用
----------------------------------------------------------------
对象语法简介化

  //单体模式
  json
   var name = "aa";
          var age = 20;
          var Person = {
              name,
              age,
              showName(){
                  return this.name;
              },
              showAge(){
                  return this.age;
              }
          }
          alert(Person.showName())

   //面向对象
    clsss      constructor

      //ES6
          class Person {
             //构造函数
              constructor(name='default',age=0){
                  //添加默认值
                 this.name = name;
                 this.age = age;
              }
              showName(){
                  //对象的方法
                  return this.name;
              }
              showAge(){
                  //对象的方法
                  return this.age;
              }
          }
            var p1 = new Person();
            var p2 = new Person('aaa',30);
            //console.log(p2.name);
            //console.log(p2.showName())
            //console.log(p2.showAge())
            //console.log(p1.showName ==p2.showName);
            console.log(p1.constructor ==Person);
            console.log(p1.name);


      继承----------
         ES5  子类的prototype = 父类 （使用apply/call等方法实现）
         ES6
      //继承  extends关键字
        class Worker extends Person{
            constructor(name,age,job='java'){
                super(name,age);//表示不覆盖父类的属性
                this.job = job;
            }
            //单独的方法
            showJob(){
                return this.job;
            }
        }
       例子：队列类  bind（看腾讯课堂）

----------------------------------------------------------------------------------------------------

   模块化------- 此时必须引用traceur.js(编译工具)和bootstrap.js,script的type类型为module
       ES5  seajs  requireJs

       ES6  自带模块化
         如何定义（导出）模块
         const a = 12;//定义一个常量，要赋值，一旦定义无法修改
         export default a;

         如何引用模块
          import ModA from 'js/a.js';
           console.log(ModA);

----------------------------------------------------------
 Promise  --承诺
   其实就是对象，用来传递异步操作的数据

   pendging （等待，处理中）---> Resolve(完成 fullFilled)
                            --->Rejected(拒绝、失败)
             var p1 = new Promise(function(resolve,reject){
                  if(异步处理成功){
                     resolve(成功原因)
                  }else{
                     reject(失败原因)
                  }

             })
             p1.then(resolve(成功),reject(失败))  可以链式调用，then方法必须传递一个参数
             ---------------
             catch(function(e){}) 方法用来捕获错误
             ---------------
             all() 全部 用于将多个Promise对象组合，包装成一个全新的Promise实例
             --------------
             race()返回的也是promise对象,最先执行的promise结果，哪个最快用哪个








