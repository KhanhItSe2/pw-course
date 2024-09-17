//1.
function bMI(weight, height) {
    let result;
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        result = "Thiếu cân";
    } else if (bmi < 25) {
        result = "Bình thường";
    } else if (bmi < 30) {
        result = "Thừa cân";
    } else if (bmi >= 30) {
        result = "Béo phì";
    }
    return result;
}
console.log(bMI(65, 1.70));

//2.
function convertTemperature(temperature, type) {
    let convertedTemp;
    switch (type) {
        case ('F'): {
            convertedTemp = (temperature - 32) * 5 / 9;
            break;
        };
        case ('C'): {
            convertedTemp = (temperature) * 9 / 5 + 32;
            break;
        }
    }
    return convertedTemp;
}
console.log(convertTemperature(30, "C"));


//3.
const array = [1, 0, 5, 3, 78, 912];
function sumArray(array) {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    return sum;
}
console.log(sumArray(array));

//4.
function findPrimeNumber(array) {
    let primeArray = [];
    for (let i = 0; i < array.length; i++) {
        let prime = true;
        if (array[i] <= 1) {
            prime = false;
        } else {
            for (let j = 2; j < array[i]; j++) {
                if (array[i] % j === 0) {
                    prime = false;
                    break;
                }
            }
        }
        if (prime) {
            primeArray.push(array[i]);
        }
    }
    return primeArray;
}

console.log(findPrimeNumber([1, 2, 0, 10, 15, 3, 7, 11, 20, 19, 23, 29]));

//5.
let userArray = [{
    name: "Khanh",
    email: "khanhnguyenitse@gmail.com"
}, {
    name: "Hung",
    email: "nguyenvanhung@gmail.com"
}, {
    name: "Nghia",
    email: "nguyenhuunghia@gmail.com"
}, {
    name: "Khang",
    email: "nguyentrankhang@gmail.com"
}]
function updateEmail(name, newEmail) {
    for (let object of userArray) {
        if (object.name === name) {
            object.email = newEmail;
        }
    }
    return userArray;
}
console.log(updateEmail("Khanh", "nguyenankhanh@gmail.com"));

//6.
let studentList = [{
    "name": "Alex",
    score: 85
}, {
    "name": "Kan",
    score: 90
}, {
    "name": "Helen",
    score: 85
}, {
    "name": "NAnh",
    score: 25
}, {
    "name": "Pun",
    score: 85
}]

function averageScore(list) {
    let sum = 0;
    for (let student of list) {
        sum += student.score
    }
    return (sum / list.length)
}
console.log(averageScore(studentList));

//7.
let productList = [{
    "name": "product 1",
    price: 85
}, {
    "name": "product 2",
    price: 90
}, {
    "name": "product 3",
    price: 85
}, {
    "name": "product 4",
    price: -25
}, {
    "name": "product 5",
    price: 85
}]
function checkPrice(list) {
    // for (let product of list) {
    //     if (product.price <= 0) {
    //         return false;
    //     }
    // }
    // return true;
    let result = "Tất cả sản phẩm có giá lớn hơn 0";
    for (let i = 0; i < list.length; i++) {
        if (list[i].price <= 0) {
            result = "Có sản phẩm có giá nhỏ hơn hoặc bằng 0";
            break;
        }
    }
    return result;
}
console.log(checkPrice(productList));
//8.
function isOpenedStore(hour) {
    let result = "";
    if (hour <= 23 && hour >= 0) {
        if (hour >= 9 && hour <= 21) {
            result = "Cửa hàng đang mở";
        } else {
            result = "Cửa hàng đã đóng cửa";
        }
    } else {
        result = "Vui lòng nhập giờ trong khoảng 0-23";
    }
    return result;
}
console.log(isOpenedStore(15));

//9.
function checkAge(age) {
    let result = "";
    if (age <= 0) {
        result = "Tuổi không hợp lệ!!";
    }
    else if (age <= 5) {
        result = "Miễn phí vé vào cổng";
    } else if (age >= 18) {
        result = "Giá vé: 100k";
    } else {
        result = "Giá vé: 50k";
    }
    return result;
}
console.log(checkAge(17));
//10.
function printMonth(month) {
    let result = "";
    switch (month) {
        case 1:
            result = "Tháng 1";
            break;
        case 2:
            result = "Tháng 2";
            break;
        case 3:
            result = "Tháng 3";
            break;
        case 4:
            result = "Tháng 4";
            break;
        case 5:
            result = "Tháng 5";
            break;
        case 6:
            result = "Tháng 6";
            break;
        case 7:
            result = "Tháng 7";
            break;
        case 8:
            result = "Tháng 8";
            break;
        case 9:
            result = "Tháng 9";
            break;
        case 10:
            result = "Tháng 10";
            break;
        case 11:
            result = "Tháng 11";
            break;
        case 12:
            result = "Tháng 12";
            break;
        default:
            result = "Không có tháng nhập vào";
            break;
    }
    return result;
}

console.log(printMonth(4));

//11.
function categoryStudent(score) {
    if (score >= 8) {
        console.log("Giỏi");
    } else if (score >= 6.5 && score < 8) {
        console.log("Khá");
    } else if (score >= 5 && score < 6.5) {
        console.log("Trung bình");
    } else {
        console.log("Yếu");
    }
}
categoryStudent(2);
//12.
function weather(temperature) {
    if (temperature >= 30) {
        console.log("Nóng");
    } else if (temperature < 30 && temperature >= 20) {
        console.log("Mát");
    } else {
        console.log("Lạnh");
    }
}
weather(24)