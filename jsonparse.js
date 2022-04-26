
//JSON.parse() is used to convert web server returned JSON string to Javascript object.


const obj='{"name":"John","age":30,"id":1,"class":"something"}';
const text=JSON.parse(obj);
console.log(text.name+" is "+text.age+" years old");

const text1 = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text1);
console.log(myArr);
console.log(myArr[2]);