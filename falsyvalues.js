//A falsy value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false
var string = ""; 

//console.log(string);
//if (false)
//if (null)
//if (undefined)
//if (0)
//if (-0)
//if (0n)
//if (NaN)
//if ("")
var filledString = "some string in here"; 

var zero = 0;
if(zero==0){
console.log(zero); 
}
var numberGreaterThanZero 

var emptyArray = []; 
var emptyObject = {};

const match = { teamA: 0, teamB: 1 }
if (match.teamA){
  // The following won't run due to the falsy evaluation
  console.log('Team A: ' + match.teamA);
}

if (typeof match.teamA === 'number'){
  console.log('Team A: ' + match.teamA);
}

console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"
