/*
    Class
    - Static Properties And Methods
*/

// Static hia wahd lhaja li khasa bl class ya3ni t9der tkhdem bia fl class kaml kadir smia dyl class ou smia dyl dik l3ayba matalan User.count++ 

class User {
    // Static Property

    static count = 0;
    constructor(id, userName, salary) {
        this.i = id;
        this.u = userName;
        this.s = salary;
        User.count++;

    }
    // Static Methods
    static CreatNumber() {
        return `${this.count} Members Created`;
    }
}


let userOne = new User(1, "imad", 400);
let userTwo = new User(2, "Kaml", 900);
let userThree = new User(3, "Ahmed", 3400);

console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log(User.CreatNumber());







