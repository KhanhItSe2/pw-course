//1.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//2.
for (let i = 2; i <= 9; i++) {
    console.log("Bảng cửu chương ", i)
    for (let j = 1; j <= 9; j++) {
        console.log(j + "x" + i + " = " + (j * i));
    }
}

//3.
const arr = [];
for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}

console.log(arr);

//4.
let emails = [];
for (let i = 1; i <= 10; i++) {
    emails.push(`user${i}@example.com`);
}
console.log(emails);

//5
const money = [{
    "month": 1,
    "total": 100
}, {
    "month": 2,
    "total": 100
}, {
    "month": 3,
    "total": 100
}, {
    "month": 4,
    "total": 100
}, {
    "month": 5,
    "total": 100
}, {
    "month": 6,
    "total": 100
}, {
    "month": 7,
    "total": 100
}, {
    "month": 8,
    "total": 100
}, {
    "month": 9,
    "total": 100
}, {
    "month": 10,
    "total": 100
}, {
    "month": 11,
    "total": 100
}, {
    "month": 12,
    "total": 100
}]
let totalYear = 0;
for (let i = 0; i < money.length; i++) {
    // totalYear += money[i].total;
    totalYear += money[i]['total'];
}
console.log("Tổng doanh thu 1 năm: " ,totalYear);