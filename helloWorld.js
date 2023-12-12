const createHelloWorld = function () {
  return function (...args) {
    return "Hello World"
  }
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// #Function Hoisting

function createFun() {
  return fun
  function fun(a, b) {
    const product = a * b
    return product
  }
}
const fun = createFun()
console.log(fun(30, 6))

// Closures
function createAdder(a) {
  function f(b) {
    const sum = a + b
    return sum
  }
  return f
}
const f = createAdder(3)
console.log(f(4)) // 7

// another example

function salary(name) {
  function count(day) {
    const total = 850 * day
    const a = console.log("hi", name, "your salary is ", total)
    return a
  }
  return count
}
const count = salary("nabin")
console.log(count(10))
