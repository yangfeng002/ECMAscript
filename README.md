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

函数
   ES5:
    function show(){

    }
    show();调用

    ES6 箭头函数  ()=>{}
       1.this指向有问题，指向的是window
       2.arguments不能使用

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
          //alert(p2.name);
            //alert(p2.showName())
            //alert(p2.showAge())
            //alert(p1.showName ==p2.showName);
            console.log(p1.constructor ==Person);
           console.log(p1.name);


      继承













