// JS Variables:JS is Dynamically Typed
// var | let | const

// 1.var
var x=10;
var x=20;
console.log(x)
// Scope behavior --> var is is not block scoped
if (true){
    var message="Hi";
}
console.log(message);

// 2.let
let name = "Sanvi";
// let name = "Sanvi"; //not allow to create with the same name
console.log(name)
// Scope behavior --> let is a block scoped
if (true){
    let message="Hi";
}
console.log(message); //cannot access outside the scope

// 3 const
const pi=3.1415;
pi = 1.315 // reassignment is not possible
const pi=3.1415 //not allowed to redeclare with the same name
console.log(pi)

// Scope behavior: const is block-scoped
if (true) {
    const x=65;
}
console.log(x);  //cannot access outside of the scope
