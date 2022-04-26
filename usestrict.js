//With strict mode, you can not, for example, use undeclared variables.


"use strict";
x = 3.14;       // This will cause an error because x is not declared

"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}

x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}

"use strict";
let x = 3.14;
//delete x;                // This will cause an error