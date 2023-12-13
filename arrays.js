// let a = [1, 2]
// let b = [3, 4]

// console.log(...a, ...b)
// const add = () => {
//   console.log(arg[0] + arg[1])
// }

var map = function (arr, fun) {
  return arr.map(fun)
}

var map = function (arr, fn) {
  const res = []
  for (const i in arr) {
    res.push(fn(arr[i], i))
  }
  return res
}

var map = function (arr, param) {
  const res = new Array(arr.length) //dynamic arrays
  for (const i in arr) {
    res[i] = param(arr[i], Number(i))
  }
  return res
}
