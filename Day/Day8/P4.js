// Operators in JS
// Arithmetic operators
console.log("Arithmetic operators")
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

// Assignment operators
console.log("Assignment operators")
let x = 5;
x += 2; // x = x + 2
console.log(x)
x -= 1; // x = x - 1
console.log(x)
x *= 3; // x = x * 3
console.log(x)
x /= 2; // x = x / 2
console.log(x)
x %= 2; // x = x % 2
console.log(x)

// Comparison operators
console.log("Comparison operators")
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(8 <= 7);     // false
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// Logical operators
console.log("Logical operators")
let age = 20;
let hasID = true;
console.log(age >= 18 && hasID); // true
console.log(age < 18 || hasID);  // true
console.log(!hasID);             // false