//1. 
const student = {
    "name": "Alex",
    "age": 10,
    "salary": 20
}
console.log("1/");
for (let key in student) {
    console.log(key + "=" + student[key])
}

//2.
let sum = 0;
for (let key in student) {
    if (typeof (student[key]) === "number") {
        sum += student[key];
    }
}
console.log("2/ ", sum);


//3.
const newArray = [];
for (let key in student) {
    newArray.push(key)
}
console.log("3/ ", newArray);