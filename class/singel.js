/**
 * 单例模式
 * 定义：一个页面里边一个js类只初始化一次
 */

class Parent {
  constructor() {
    this.name = '小明';
  }

  getName() {
    console.log(this.name)
  }

  // static singel = function () {
  //   console.log(this);
  //   if (!this.instance) {
  //     console.log('只执行一次');
  //     this.instance = new Parent()
  //   }
  //   return this.instance
  // }
}

// 单例模式
// 工厂函数：创建单例模式
Parent.singel = function () {
  console.log(this);
  if (!this.instance) {
    console.log('只执行一次');
    this.instance = new Parent()
  }
  return this.instance
}
