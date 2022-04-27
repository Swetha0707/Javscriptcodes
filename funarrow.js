//regular functions
let square = function(x){
    return (x*x);
    };
    console.log(square(9));
    
//arrow functions
    var square1 = (x) => {
        return (x*x);
    };
    console.log(square1(9));



    let user = {
        name: "GFG",
        gfg1:() => {
            console.log("hello " + this.name); // no 'this' binding here bcs its an arrow function
        },
        gfg2(){       
            console.log("Welcome to " + this.name); // 'this' binding works here bcs its a regular function
        }  
     };
    user.gfg1();
    user.gfg2();

    let x = function(){
        console.log(arguments);
    };
    new x =(1,2,3);

    let x1 = ()=> {
        console.log(arguments);
    };
    new x1(1,2,3);