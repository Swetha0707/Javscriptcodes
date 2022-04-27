//callback is  calling a function inside another function


//regular function
function stepOne() {
    console.log("Step 1");
}
function stepTwo() {
    console.log("step two");

}
console.log("Regular function\n");

stepOne();
stepTwo();
console.log("\n");
//callback function
function One(call_stwo) {
    call_stwo();
    console.log("Step 1");
}
function Two() {
    console.log("step two");

}
console.log("callback function\n");

One(Two);