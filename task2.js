function puddle(arr){
    let right = arr.length - 1;
    let left = 0;
    let puddle = 0;

    let left_pointer = 0;
    let right_pointer = 0;

    while (left < right) {
        if (arr[left] < arr[right]) {
            arr[left] >= left_pointer ? left_pointer = arr[left] : puddle += left_pointer - arr[left];
            ++left;
        } else {
            arr[right] >= right_pointer ? right_pointer = arr[right] : puddle += right_pointer - arr[right];
            --right;
        }
    }

    return puddle;
}

console.log("### TASK 2 ###");
console.log(puddle([2,1,5,0,3,4,7,2,3,1,0]));
console.log(puddle([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]));