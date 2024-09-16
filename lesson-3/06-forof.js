//1.
const str = "Playwright";
console.log("1.1/ ");

for (let index of str) {
    console.log(index);
}
console.log("1.2/ ");
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
//2.
const arr = [1, 2, 3, 4, 3, 55, 23, 3];
const detectedNumber = 3;
let firstIndex = -1;
let lastIndex = -1;
let i = 0;
for (let value of arr) {
    if (value === detectedNumber) {
        if (firstIndex === -1) {
            firstIndex = i;
        }
        lastIndex = i
    }
    i++
}
console.log(`2/ Vị trí đầu tiên: ${firstIndex}`);
console.log(`2/ Vị trí cuối cùng: ${lastIndex}`);
//3.
const arr3 = [];
for (let i = str.length - 1; i >= 0; i--) {
    arr3.push(str[i])
}
console.log("3/ ", arr3)

//4.
const arr4 = [1, 2, 3, 1, 2, 4, 5];
const newArr = []
for(let i of arr4){
    let isDuplicated = false;
    for (let j of newArr){
        if (j === i){
            isDuplicated = true;
            break
        }
    }
    if (!isDuplicated) {
        newArr.push(i);
    }
}
console.log(`4/ ${newArr}`)