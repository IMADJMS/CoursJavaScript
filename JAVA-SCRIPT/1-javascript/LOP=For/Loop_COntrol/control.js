/*
Loop Control
    Break
    Continue
    Label
*/
let products = ["Keyboard", "Mouse", "Pen",5,15,87, "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];


for (let i = e; i < products.length; i++) {
    console.log(products[i]);
    if (products[i] === "Pen"){
    break;
    }   
}



for (let i = e; i < products.length; i++) {
    console.log(products[i]);
    if (products[i] === "Pen"){
    continue;
    }   
}