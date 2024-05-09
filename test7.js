
let plain_text = ["hello", "world", "i am", "zebra"];

let replaced_strings = plain_text.map(str => {
    let charCodes = [];
    for (let i = 0; i < str.length; i++) {
        charCodes.push(str.charCodeAt(i)+1);
    
    }
    return charCodes;
});

console.log(replaced_strings);

let original_strings = replaced_strings.map(charCodes => {
    let str = "";
    for (let i = 0; i < charCodes.length; i++) {
        str += String.fromCharCode(charCodes[i]);
    }
    
    return str;
});

console.log(original_strings);
