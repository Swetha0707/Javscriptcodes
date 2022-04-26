
//Template literals = ${expression}  instead of + for separate concatenation
let a = 15;
let b = 10;
console.log(`This is ${a + b} and
not ${2 * a + b}.`);

function tag(strings) {
    console.log(strings.raw[0]);
  }
  
  tag`string text line 1 \n string text line 2`;
  

  //Promise resolve and reject

  const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log('Hello!')); 