var createCounter = function (num) {
  return function () {
    return num++ //hidden value
  }
}

const count = createCounter(20)

// //we can also do this
// var createCounter = function (n: number) {
//   return () => n++
// }
