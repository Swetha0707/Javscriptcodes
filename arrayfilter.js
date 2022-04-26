// filter function used to give a new array which passes the function

const num=[34,12,7,90,10,5,2];
const check=num.filter(test);
function test(num){
    return num>=8;
}
console.log(check);
