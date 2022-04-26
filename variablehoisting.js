//Hoisting is JavaScript's default behavior of moving declarations to the top.
x=5;
console.log(x);
var x;

var z=10;
console.log(z+ ""+ y);
var y=7;

//let and const will show errors in let=>ReferenceError and in const =>syntax error

/*
carName = "Volvo";
let carName;

carName1 = "Volvo";
const carName1;  */