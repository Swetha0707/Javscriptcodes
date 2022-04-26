//The reduce() method returns a single value: the function's accumulated result.
//It starts subtraction from left to right.

const numbers = [200, 175, 50, 25];

const result= numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

console.log(result);

//reduceRight() function starts from right to left.
const numbers1 = [ 4,9 ,16, 25];

const result1= numbers1.reduce(myFunction);

function myFunction(total1,num1) {
  return total1+Math.sqrt(num1) ;
}

console.log(result1);
console.log(numbers1.length);

//some method returns the element array which pass the test
const ages = [3, 10, 12, 2];

ages.some(checkAdult);
function checkAdult(age) {
  return age <18;
}
console.log(ages.some(checkAdult));