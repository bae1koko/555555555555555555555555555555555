// 3

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    let fac = 1;
    for (let i = 1; i <= n; i++) {
        fac *= i;
    }
    return fac;
}

console.log("3! = " + factorial(3));
console.log("5! = " + factorial(5));
console.log("10! = " + factorial(10));