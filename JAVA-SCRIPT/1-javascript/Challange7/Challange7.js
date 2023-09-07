let zero = 0;
let counter = 3;
let my =  ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
 

//Write Code Here : 

//Q1 : ["Osama" "Elham", "Mazero "Ahmed"]
console.log(my.pop());
console.log(my.pop());
console.log(my.reverse());


//Q2 : ["Elham", "Mazero"]
my2 = my;
console.log(my2.shift());
console.log(my2.pop());
console.log(my2.slice());


//Q3 : "Elzero"
my2.splice(0,2,"Elzero");
//console.log(my2.join(""));
console.log(my2.slice().reverse());


