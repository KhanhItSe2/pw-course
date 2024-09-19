//1 
let departurePlanet = "Trái đất";
let mission = "Khám phá Vũ trụ K9";
let crew = ["Uyên Thanh", "Lan Anh", "Minh Trang Bui", "Khanh Đinh", "Nguyễn Duyên", "Trường Lâm", "Lê Long", "Tuấn Phạm", "Âu Dương Thoại", "Phạm Thu Thủy", "Khánh Nguyễn"];

function launchShip(crew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến
phiêu lưu ${mission}!".`
}

console.log(launchShip(crew));

//2
function calculateDistance(speed, time) {
    let distance;
    if (typeof (speed) !== "number" || typeof (time) !== "number") {
        return "Vui lòng truyền tham số với giá trị có kiểu dữ liệu là số";
    } else {
        if (speed < 0 || time < 0) {
            return "Vui lòng truyền tham số với giá trị lớn hơn hoặc bằng 0";
        } else {
            distance = speed * time;
        }
    }

    return distance;
}

console.log(calculateDistance("100", "200"))
console.log(calculateDistance(-100, -24))
console.log(calculateDistance(100, 24))

//3
function convertTimeToHex(time) {
    let hexTime;
    if (time < 0) {
        return "Vui lòng truyền tham số thời gian có giá trị lớn hơn 0";
    } else {
        hexTime = time.toString(16);
    }
    return hexTime;
}
console.log(convertTimeToHex(120));

//4
function decryptCode(code) {
    let decrypted = [];
    for (let index of code) {
        if (index === index.toLowerCase()) {
            index = index.toUpperCase();
        } else {
            index = index.toLowerCase();
        }
        decrypted.push(index)
    }
    return decrypted.join("");
}
console.log(decryptCode("Decrypt Code"));

function decryptCode2(code) {
    let decrypted = "";
    for (let index of code) {
        if (index === index.toLowerCase()) {
            decrypted += index.toUpperCase();
        } else {
            decrypted += index.toLowerCase();
        }
    }
    return decrypted;
}

console.log(decryptCode2("K9 Challenge"));

function decryptCode3(code) {
    let decrypted = "";
    for (let i = 0; i < code.length; i++) {
        if (code[i] === code[i].toLowerCase()) {
            decrypted += code[i].toUpperCase();
        } else {
            decrypted += code[i].toLowerCase();
        }
    }
    return decrypted;
}

console.log(decryptCode3("K9 Challenge"));


//5
function returnToEarth() {
    console.log(`Chuẩn bị trở về ${departurePlanet}!`);
}

returnToEarth();