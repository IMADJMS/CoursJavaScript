let job = "Manager";
let salary = 0;

 //Q1 :
if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
salary = 6000;
} else if (job === "Developer" || job === "Designer"){
    salary = 6000;
} else {
    salary = 4000;
}
//Ansewr :
switch (job) {
    case "Manager":
        console.log(8000);
    break;
    case "IT":
    case "Support":
        console.log(6000);
    break;
    case "Developer":
    case  "Designer":
        console.log(6000);
    default :
        console.log(4000);
}

let holidays = 5;
let money = 0;

//Q2 :
switch (holidays) {
    case 0:
        money = 5000;
        console.log(`My Money is ${money}`);
    break;
    case 1 :
    case 2 :
        money = 5000;
        console.log(`My Money is ${money}`);
    break;
    case 3 :
        money = 2000;
        console.log(`My Money is ${money}`);
    break;
    default :
    console.log("ERROR");
};
//Answr
if (holidays == 0){
    money = 5000;
    console.log(`My Money is ${money}`);
} else if (holidays == 1 || holidays == 2) {
    money = 5000;
    console.log(`My Money is ${money}`);
} else if (holidays == 3){
    money = 2000;
    console.log(`My Money is ${money}`);

} else {
    console.log("ERROR");
}


