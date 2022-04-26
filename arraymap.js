//map returns a new array

const numbers = [3,2,41,1,8,10];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log(newArr);