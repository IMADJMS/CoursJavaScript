/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
    theColor: "Black",
    skills: {
        html: 70,
        css: 80,
    },
};

// const {
//     theName: n, // hna katbdel liha smia dyal variable
//     theAge: a,
//     theTitle: t,
//     theColor: Color = "red",// katbdel liha l valeur dyalha
//     skills: { html: ht = 80, css: cs = 90 }
// } = user;
// console.log(n);
// console.log(a);
// console.log(t);
// console.log(Color);
// console.log(`My html skills ${ht}`);
// console.log(`My css skills ${cs}`);


// // ila kanti baghi gha skills
// const { html: skillsOne, css: skillTwo } = user.skills;
// console.log(`My html skills2 ${skillsOne}`);
// console.log(`My css skills2 ${skillTwo}`);





const Class = {
    Numbre: 39,
    NAME: "imad",
    ffff: "kamal",
    Skills: {
        html: 89,
        css: 900
    }
}


const { }
