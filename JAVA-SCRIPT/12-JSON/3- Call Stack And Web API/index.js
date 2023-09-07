/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

setTimeout(() => {
    console.log("Web API");
}, 0);

function one() {
    console.log("One");
}
function two() {
    one();
    console.log("Two");
}
function three() {
    two();
    console.log("Three");
}

three();

/*
=================================
console.log("One");
=================================
function one() {
  console.log("One");
}
=================================
function two() {
  one();
  console.log("Two");
}
=================================
function three() {
  two();
  console.log("Three");
}
=================================
*/

console.log("#####");
console.log("One");
console.log("Two");
console.log("Three");


// ila kanti nsiiitii ghadi n3tek mital bach tafham:

// db 3adna wahd lmajmou3a dyal lfunction :

console.log("1");

setTimeout(function () {
    console.log("2")
}, 4000);

setTimeout(function () {
    console.log("3")
}, 0);

console.log("4");

/*db hna normalmo khas tkon
    1
    2
    3
    4 
Walikin la ghadi tatba3 
    1 
    4
    3
    2
db hna 3arin bli javaScript kadoz lik statr bstar li hia "Call stack"
db hia jat lstar lwal l9ato kif kangolo wajed katab3o ou ila l9ato khaso wa9t bach itaTba3
katsayfto l wahd lhaaj fhala glti snayde9 li kitsama (Event loop)
hta kisali dakchi 3ad kidoz ldakchi li kan fl Event loop


*/
