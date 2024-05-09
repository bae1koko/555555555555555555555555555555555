let x = 100

function hello() {
  console.log("hello world")
}

let add = (x, y) => { return x + y}


module.exports = {
  x,
  hello,
  add
}
//
let { x, hello } = require('./simple2')

console.log(x)

hello()