/**
 * 高阶函数：如果一个函数的形参或者返回值也是一个函数
 */

/**
 * 1. 回调函数
 * @param {*} url 
 * @param {*} callback 
 * 作用：获取函数内部返回的数据
 */
function ajax(url, callback) {
  setTimeout(() => {
    callback(10000)
  }, 2000)
}
ajax('api', (res) => {
  console.log(res);
})

/**
 * 2. 闭包
 * 作用：
 * 2.1 定义的变量会常驻内存
 * 2.2 避免污染全局作用域
 */
function addNum() {
  let count = 0;
  return function () {
    if (count === 3 || count === null) {
      count = null;
      return
    }
    console.log(++count);
  }
}
(function () {
  var test = 100;
  console.log('run...');
})()


// add(1)(2)(3)
/**
 * 3. 函数柯里化：把一个多参数函数变为单参数函数，并返回接收余下参数函数和结果的函数
 * 作用：
 * 3.1 参数复用
 * 3.2 延迟调用
 */
function add(num) {
  return function (tum) {
    return function (eum) {
      return num + tum + eum
    }
  }
}

console.log(add(1)(2)(3));

let fn1 = add(1)(4);
console.log(fn1);
console.log(fn1(6), fn1(10));