/**
 * 高阶函数：如果一个函数的形参或者返回值也是一个函数
 * 1. 回调函数
 * 2. 闭包
 * 3. 柯里化
 */

/**
 * 1. 回调函数
 * 作用：
 * 获取函数内部的数据
 */
function ajax(url, callback) {
  setTimeout(() => {
    console.log(url);
    callback(100)
  }, 2000)
}

ajax('api', (data) => {
  console.log('get data:', data);
})

/**
 * 2. 闭包：函数套函数
 * 作用：
 * 1. 里边定义的东西常驻内存
 * 2. 避免全局环境变量污染
 */
// 写一个方法，返回另一个方法；现在调用上一步返回的方法：1 =》 2 =》 3
let fn = function () {
  let count = 0;
  return function () {
    count += 1;
    console.log(count);
  }
}

  // 自执行表达式
  ; (function (w) {
    var wps = 10000;
    console.log(wps);
  })(window)


/**
 * 3. 函数柯里化：就是把一个多参函数，变为一个单参函数并且返回接收余下参数和结果的函数
 * 作用：
 * 1. 延迟调用
 * 2. 参数复用
 * 
 *
 */
// 普通函数
// function add(a, b, c) {
//   return a + b + c
// }

// 柯里化函数
// add(1)(2)(3);
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

console.log(add(2)(4)(10));
let first = add(10);
console.log(first);
let sec = first(30)(100);
console.log(sec);
let thr = first(60)(20)
console.log(thr);