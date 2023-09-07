a = "Elzero web School";

//Q1 : Include This Methods In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3,6) );

//Q2 : 8 H
console.log(a.slice(13,14).repeat(8).toUpperCase()); 

//Q3 :  Return Array
console.log(a.split(" ",1));

//Q4 : Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0,6) + " " +  a.substr(-6,6)); // Elzero School

//Q5 :  Solution Must Be Dynamic And String May Change
console.log(a.slice(0,1).toLowerCase()+ a.slice(1,-1).toUpperCase()+ a.substr(a.length -1).toLowerCase());

