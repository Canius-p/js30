// const nums = [10, 20, 30.4]
// function fn(init, n) {
//   return init + n
// }

// nums.reduce(fn, 0)
//arrays
var reduce = function (nums, fun, init) {
  return nums.reduce(fn, init)
}

var reduce = function (nums, fn, init) {
  let res = init

  for (const n of nums) {
    res = fn(res, n)
  }
  return res
  return nums.reduce(fn, init)
}
