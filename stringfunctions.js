
//charAt() The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.

const str="This is an example of chartAt string";
const index=5;
console.log(`The character at index ${index} is ${str.charAt(index)}`);


//The indexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring.
// Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

const str1="This is an example of chartAt string, and will look into that example.";
const searchstring="example";
const returnedchar=str1.indexOf(searchstring);
console.log(`The character ${searchstring} is at the index of ${returnedchar}`);
console.log(`The character  ${searchstring} after first example is ${str1.indexOf(searchstring,(returnedchar+1))}`);

//The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp,and it only replaces the first occurence of a substring.

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));


const regex = /Dog/i;
console.log(p.replace(regex, 'cat'));

//The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

const str2="Firefox";
console.log(str2.substr(1,2));
console.log(str2.substr(2));

//The includes() method find out if a string contains a sequence of characters:

const myStr = "Hello";
console.log(myStr.includes("Hel"));   
console.log(myStr.includes("e"));     
console.log(myStr.includes("Hi")); 
