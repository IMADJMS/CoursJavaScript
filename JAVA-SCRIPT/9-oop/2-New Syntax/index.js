/*
    Constructor Function
    - New Syntax
*/


class User {
    constructor(id, username, salary) {
        this.I = id;
        this.U = username || undefined;
        this.S = salary;
    }
}

let UserOne = new User(1, "Imad", 1000);
let UserTwo = new User(2, "Smail", 5000);
let UserThree = new User(3, "Habib", 9000);






console.log(UserOne);
console.log(UserTwo);
console.log(UserThree);


// Hadi asat katgol liha wach had userOne kayna fl user true wla false
console.log(userOne instanceof User);
console.log(userOne.constructor === User);


