/*
    Class
    - Inheritance
*/

class User {
    constructor(id, userName, salary) {
        this.i = id;
        this.u = userName;
        this.s = salary;
    }
    Message() {
        return `Hello World`;
    }
}

class Adimn extends User {
    constructor(id, userName, salary, permissions) {
        super(id, userName, salary)
        this.p = permissions;
    }
}

let AdminOne = new Adimn(2, "smail", 330, 4);
console.log(AdminOne);
