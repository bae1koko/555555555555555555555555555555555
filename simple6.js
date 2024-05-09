//let my_string = ["hello", "world", "i am", "zebra"]
//console.log(my_string.replace(/a/g/" "))



let my_string = ["hello", "world", "i am", "zebra"];
let replaced_strings = my_string.map(str => str.replace(/[aeiou]/g, ""));  //สร้างอาร์เรย์ใหม่มาเก็บ แล้วรับสตริง

console.log(replaced_strings);
