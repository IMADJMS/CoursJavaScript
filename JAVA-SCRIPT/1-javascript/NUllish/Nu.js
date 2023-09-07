/*
Logical or ||
   Null + Undefined + Any Falsy Value
Nullish Coalescing Operator ??
   Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(e));
console.log(Boolean(""));
console.log(Boolean(null));



let price = ""; // Or NUlle Or 0
console.log( `The Price Is ${price || 200}`);
console.log( `The Price Is ${price ?? 200}`);
/* 
hadi katnf3ek ila kant fhadek lprice khwya wla fiha nulle ila darti lina excekit ghadi tla3 lik ya indified wla 0 lmohim
hadi fhala katgol liha ila ila makan ta haja hoti lia hadek l9ima 

ama tania gha fhalha gha hia kat9bel hta 0 ama lwla la 
ila makanch walo || hoti lia hadek l9ima


*/