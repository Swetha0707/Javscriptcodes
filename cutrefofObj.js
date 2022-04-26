
//firstObject values changed because secondobject reference to firstobject,so if we add anything in secondoject it reflects in firstobject.
firstObject={};
secondObject=firstObject;
secondObject.newObj=1;
secondObject.name="john david";


console.log(firstObject);
//By using assign(),we can overcome the above challenge
firstObject={};
secondObject={};
secondObject.newObj=1;
secondObject.name="john david";

const result=Object.assign(secondObject,firstObject);
console.log(firstObject);
console.log(secondObject);