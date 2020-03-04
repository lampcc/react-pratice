/**
 * 使用es5 创建类
 */
/**
 * 类的静态属性：不需要new，直接可以从类名上获取的属性
 * @param {*} name 
 */
function Parent(name) {
  this.name = name
}

// 原型上定义方法
Parent.prototype.getName = function () {
  console.log(this.name);
}

// 继承
function Child(name) {
  // 继承父类实例上的属性
  Parent.call(this, name)
}

// 定义静态属性
Child.sta = 100;

Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child
  }
});

var chi1 = new Child('小红');
console.log(chi1);

/**
 * es6 class关键字创建类
 */

class Par {
  constructor(name) {
    this.name = name
  }

  getName() {
    console.log(this.name);
  }
}

// es6 继承：extends关键字

class Chi extends Par {
  constructor(name) {
    super(name);
    this.age = 10;
    this.setAge = function () {
      this.age = 100;
    }
  }

  // 定义属性
  other = 10;

  // 定义方法
  handler() {
    console.log(this.other);
  }

  // 定义静态属性：static关键字
  static sta = 10000;
}

let Chi2 = new Chi('小明');
console.log('es6:', Chi2);



