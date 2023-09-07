/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];



if (chosen === 1) {
    let = {
        title: ti,
        age,
        available,
        skills: [, s]
    } = myFriends[0]
    if (available === true) {
        available = 'available'
    }
    console.log(ti);
    console.log(age);
    console.log(available);
    console.log(s);
}


if (chosen === 2) {
    let = {
        title: ti,
        age,
        available,
        skills: [, s]
    } = myFriends[1]
    if (available === false) {
        available = 'Not available';
    }
    console.log(ti);
    console.log(age);
    console.log(available);
    console.log(s);
}

if (chosen === 3) {
    let = {
        title: ti,
        age,
        available,
        skills: [, s]
    } = myFriends[2]
    if (available === true) {
        available = ' available';
    }
    console.log(ti);
    console.log(age);
    console.log(available);
    console.log(s);
}