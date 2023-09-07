/*
  Constructor Function
*/


function User(id, name, salary) {
    this.I = id;
    this.N = userName || undefined; // Hadi ila User madakhlch Name ghadi tla3 lih undefined ou ymkan lik dir ay haja
    this.S = salary;
}

let UserOne = new User(1, "Imad", 5000);
let UserTwo = new User(2, "Smail", 6000);
let UserThree = new User(3, "Amine", 7000);
let UserFour = new User(3, "", 8000);




console.log(UserOne);
console.log(UserTwo);
console.log(UserThree);
console.log(UserFour);




