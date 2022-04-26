const person = {
    firstName: 'John',
    lastName: 'Doe'
 };
 let result = person.hasOwnProperty('firstName');
console.log(result); 
 result = person.hasOwnProperty('age');
console.log(result);
 result = person.hasOwnProperty('toString'); 
console.log(result);

//Use the in operator to check if a property exists in both own properties and inherited properties of an object.


const person1 = {
    firstName: 'John',
    lastName: 'Doe'
 };
 
 let result1 = 'firstName' in person1; 
 console.log(result1); 
 
 result1 = 'age' in person1;
 console.log(result1); 

  result1 = 'toString' in person1;
console.log(result1);


//Use the hasOwnProperty() method to check if an property exists in the own properties of an object.

let person2 = {
    firstName: 'John',
    lastName: 'Doe'
 };
 
 let result2 = person2.firstName !== undefined;
 console.log(result2);
  person2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: undefined
 };
 
  result2 = person2.age !== undefined;
 console.log(result2);