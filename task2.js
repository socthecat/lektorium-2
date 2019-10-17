function puddle(arr){
    let right = arr.length - 1;
    let left = 0;
    let puddle = 0;

    let leftPointer = 0;
    let rightPointer = 0;

    while (left < right) {
        if (arr[left] < arr[right]) {
            arr[left] >= leftPointer ? leftPointer = arr[left] : puddle += leftPointer - arr[left];
            ++left;
        } else {
            arr[right] >= rightPointer ? rightPointer = arr[right] : puddle += rightPointer - arr[right];
            --right;
        }
    }

    return puddle;
}

console.log("### TASK 2 ###");
console.log(puddle([2,1,5,0,3,4,7,2,3,1,0]));
console.log(puddle([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]));