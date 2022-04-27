//The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566 
   
  };
  Object.defineProperty(person, "id", {enumerable:false});
  console.log(Object.keys(person));

  //The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

  const target = { 
    firstName: "John",
    lastName: "Doe",
    id: 5566,
   };
const source = { 
    firstName: "John",
    lastName: "Dravid",
    id: 2244,
    class:"B section",
};

const result=Object.assign(target,source);
console.log(target);
console.log(result);


//The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. 
//(The only difference is that a for...in loop enumerates properties in the prototype chain as well.)



const object1 = {
    irstName: "John",
    lastName: "Dravid",
    id: 2244,
    class:"B section",
    c: false
  };
  
  console.log(Object.values(object1));