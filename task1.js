function ArrMath(mode, arr) {
    let temparr = arr.filter((a) => !isNaN(a));
    switch (mode) {
        case 'min':
            return temparr.reduce((a, b) => Math.min(a, b));
            break;
        case 'max':
            return temparr.reduce((a, b) => Math.max(a, b));
            break;
        case 'sum':
            return temparr.reduce((a, b) => a + b);
            break;
        default:
            break;
    }
}

console.log("### TASK 1 ###")
console.log("[3,'a',0,-5,1,44,-12,3,NaN,0,0,1,2,-3,-3,undefined,2,1,4,-2-3-1]");
console.log(ArrMath('max', [3, 'a', 0, -5, 1, 44, -12, 3, NaN, 0, 0, 1, 2, -3, -3, undefined, 2, 1, 4, -2 - 3 - 1]));
console.log(ArrMath('min', [3, 'a', 0, -5, 1, 44, -12, 3, NaN, 0, 0, 1, 2, -3, -3, undefined, 2, 1, 4, -2 - 3 - 1]));
console.log(ArrMath('sum', [3, 'a', 0, -5, 1, 44, -12, 3, NaN, 0, 0, 1, 2, -3, -3, undefined, 2, 1, 4, -2 - 3 - 1]));
console.log(ArrMath('abrakadabra', [3, 'nanachi', 0, -5, 1, 44, -12, 3, NaN, 0, 0, 1, 2, -3, -3, undefined, 2, 1, 4, -2 - 3 - 1]));