// 4
function displayMultiplicationTable(number) {
    console.log(`แม่สูตรคูณเลข ${number}`);

    for (let i = 1; i <= 12; i++) {
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}

// เรียกใช้ฟังก์ชัน ใส่ตัวเลข
displayMultiplicationTable(1);
