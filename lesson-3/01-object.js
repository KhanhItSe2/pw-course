//1. 
const car = {
    make: "Toyota",
    model: "Corolla",
    year: "2021"
}

console.log("1. Year of car: " + car.year);

//2. 
const person = {
    name: "Khanh",
    address: {
        street: "Long An",
        city: "San Francisco",
        country: "US",
    }
}

console.log("2. Street: " + person.address.street);

//3.
const student = {
    name: "Au",
    grades: {
        math: 4.9,
        englis: 4.8
    }
}

console.log("3. Math grade: " + student["grades"]["math"]);

//4.
const product = {
    "iphone": 5000,
    "samsung": 3000,
    "ipad": 2000,
    "oppo": 1000
}

console.log("4. ");
for (const item in product) {
    console.log(item + ": " + product[item]);
}

//5.
const settings = {
    volume: "max",
    brightness: "min"
}

settings.volume = "min";

console.log("5. ", settings);

//6.
const bike = {

}
bike.color = "black";
console.log("6. ", bike);

//7.
const employee = {
    name: "Au",
    age: "23"
}
delete employee.age;
console.log("7. ", employee);

//8. 
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
