/*
DOM
    What Is DOM
    DOM Selectors
    Find Element By ID
    Find Element By Tag Name
    Find Element By Class Name
    Find Element By CSS Selectors
    Find Element By Collection
        title
        body
        images
        forms
        links
*/


let myIdElement =  document.getElementById("my-div"); // katjib wahd lElemet bl Id
let myTagElements = document.getElementsByTagName ("p"); // katjib wahd lElemet bl Tag name fhala p div form....
let myClassElement = document.getElementsByClassName ( "my-span"); // katjib wahd lElemet bl CLass

// querySelector katjma3hom kamlin katjin lik idlclas tag kolchi 
// lfar9 bin querySelector ou querySelectorAll howa anaho f querySelector katjib lik awal Element 
// mataln 3andek wahd lclass fih imad imad hia ghadi tjib imad lwlaa ama querySelectorAll katjib lik kolchi ila kan 3andek wahd lclass fih imad imad ghadi tjibhom lik kamlin

let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");



console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElement[1]);
console.log(document.title);
console.log(document.body);
console.log(document.forms [0].one.value);
console.log(document.links[1].href);