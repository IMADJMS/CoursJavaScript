/*
    If Challange 
*/
let a = 10;

if (a < 10) {
    console.log(10);
    }else if (a >- 10 && a <- 40)
    console.log("10 To 40");
    else if (a > 40) {
    console.log("> 40");
    } else {
    console.log("Unknown");
    }

//Q1 : Write With Ternary If Syntax
a < 10 ? console.log(10) : a >- 10 && a <- 40 ? console.log("10 To 40") : a > 40 ? console.log("> 40") : console.log("Unknown");

//Q2 : 
let st = "Elzero web school";
if(typeof st === typeof "34"){
    console.log("Good")
};

if (
    st
    .slice(st.indexOf("w") - 1, st.indexOf("w") + 1)
    .toLowerCase()
    .trim() === "w"
) {
    console.log("Good");
}

//Q3 : 
if (typeof Number(st) !== "string") {
    console.log("Good");
}


//Q4 : 
if (typeof Number(st) === "number") {
    console.log("Good");
}


  //Q5 : 
if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}
  