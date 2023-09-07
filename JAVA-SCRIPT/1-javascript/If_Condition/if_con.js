/*
Control Flow
    if
    else if
    else   
*/





let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";



if (discount === true) {
    price -= discountAmount;
}  else if (country === "Egypt") {
    price -=40;
} else if (country === "Syria") {
    price -= 50;
} else {
    price -= 10 ;
} 