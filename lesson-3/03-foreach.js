//1. 
const numbers = [1, 2, 3];
numbers.forEach(index => console.log(index))

//2.
const arr = [1, 2, 3, 10, 100, 2, 0, 5, 6, 1];
let sum = 0;
let min = arr[0];
let max = arr[0];
arr.forEach(index => {
    sum += index;
    if (max < index) {
        max = index;
    } else if (min > index) {
        min = index;
    }
});
console.log("2. Sum of array: ", sum);
console.log("2. Max number in array: ", max);
console.log("2. Min number in array: ", min);

//3.
const array = [5, 4, 3];
const newArray = [];
array.forEach(index => newArray.push(index * 2));
console.log("3. New array: ", newArray);