### 闭包 

> [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

**本质**

闭包是将函数内部和函数外部连接起来的桥梁。

**形成闭包的必要条件：**

- 两个函数形成嵌套关系
- 内部函数访问外部函数的变量
- 内部函数作为返回值返回 

**闭包的例子**

```js
function warp () {
    let num = 1
    return function () {
        console.log(num)
    }
}
const p = warp()
p()
```

**优点**

外部函数能访问到内部变量

延长变量的生命周期（函数内部的变量是局部变量垃圾回收机制不能自动清除，所以会延长生命周期）

**缺点**

会形成数据的缓存，用完之后需要手动清空（给该变量赋一个空值null）

### 使用

**用闭包模拟私有方法**

> 编程语言中，比如 Java，是支持将方法声明为私有的，即它们只能被同一个类中的其它方法所调用。而 JavaScript 没有这种原生支持，但我们可以使用闭包来模拟私有方法。私有方法不仅仅有利于限制对代码的访问：还提供了管理全局命名空间的强大能力，避免非核心的方法弄乱了代码的公共接口部分。

```js
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
```

**模拟块级作用域**

```js
function A() {
  (function() {
    for(var i = 0; i < num; i++) {
			num++;      
    }
  })()
  console.log("模拟块级作用域", i);
}
```

