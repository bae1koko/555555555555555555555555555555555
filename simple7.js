
let plain_text = ["hello", "world", "i am", "zebra"]

let replaced_strings = plain_text.map(str => {
    let charCode = [];
    
    for (let i = 0; i < str.length; i++) {
        charCode.push(str.charCodeAt(i) + 1); //เอารหัสของตัวอักษร+1
    }
    
    return charCode;
});
console.log(replaced_strings)


let reverse_string = replaced_strings.map()