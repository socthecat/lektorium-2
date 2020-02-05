function arrMath (mode, arr) {
  const temparr = arr.filter((a) => !isNaN(a))
  switch (mode) {
    case 'min':
      return temparr.reduce((a, b) => (a > b) ? b : a)
    case 'max':
      return temparr.reduce((a, b) => (a > b) ? a : b)
    case 'sum':
      return temparr.reduce((a, b) => a + b)
    default:
      break
  }
}

console.log('### TASK 1 ###')
console.log("[3,'a',0,-5,1,44,-12,3,NaN,0,0,1,2,-3,-3,undefined,2,1,4,-2-3-1]")
console.log(arrMath('max', [3, 'a', 0, -5, 1, 44, -12, 3, NaN, 0, 0, 1, 2, -3, -3, undefined, 2, 1, 4, -2 - 3 - 1]))
console.log(arrMath('min', [3, 'a', 0, -5, 1, 44, -12, 3, NaN, 0, 0, 1, 2, -3, -3, undefined, 2, 1, 4, -2 - 3 - 1]))
console.log(arrMath('sum', [3, 'a', 0, -5, 1, 44, -12, 3, NaN, 0, 0, 1, 2, -3, -3, undefined, 2, 1, 4, -2 - 3 - 1]))
console.log(arrMath('abrakadabra', [3, 'nanachi', 0, -5, 1, 44, -12, 3, NaN, 0, 0, 1, 2, -3, -3, undefined, 2, 1, 4, -2 - 3 - 1]))
