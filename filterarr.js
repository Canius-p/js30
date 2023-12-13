var filter = function (arr, fun) {
  //   arr.filter((n, i) => {
  //     return n > 10
  //   })
  //diclearative programming
  return arr.filter(fn)

  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i], Number(i))) {
      res.push(arr[i])
    }
  }
  return res
}

if (userInput !== null && userInput !== "") {
  //do something
}
