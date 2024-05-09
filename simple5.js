let con = "";

let Sort = (row, orderby) => {
    switch (orderby) {
        case "asc":
            for (let i = 1; i <= row; i++) {
                con += i; // เพิ่มค่า i ลงในตัวแปร con เพื่อเก็บข้อมูลที่ต้องการแสดง
                console.log(con);
            }
            break;
        case "desc":
            for (let i = row; i >= 1; i--) {
                con += i; // เพิ่มค่า i ลงในตัวแปร con เพื่อเก็บข้อมูลที่ต้องการแสดง
                console.log(con);
            }
            break;
        default:
            console.log("Invalid orderby parameter. Please use 'asc' or 'desc'.");
            break;
    }
};

Sort(5, "desc");
